/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 93.30991293722316, "KoPercent": 6.690087062776844};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9314529131239074, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9314529131239074, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 294615, 19710, 6.690087062776844, 200.60617076523843, 0, 3195, 178.0, 228.0, 232.0, 237.0, 4895.2379369932205, 74787.2581050923, 867.4001778660027], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 294615, 19710, 6.690087062776844, 200.60617076523843, 0, 3195, 178.0, 228.0, 232.0, 237.0, 4895.2379369932205, 74787.2581050923, 867.4001778660027], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 2,672 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8081 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 18838, 95.57584982242517, 6.394107564109092], "isController": false}, {"data": ["The operation lasted too long: It took 2,561 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,066 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,881 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,003 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,098 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,732 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 4, 0.020294266869609334, 0.0013577041223291413], "isController": false}, {"data": ["The operation lasted too long: It took 2,025 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,251 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,427 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,900 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,899 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,557 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,381 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,703 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,008 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,796 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,424 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 3, 0.015220700152207, 0.001018278091746856], "isController": false}, {"data": ["The operation lasted too long: It took 2,558 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 5, 0.025367833587011668, 0.0016971301529114268], "isController": false}, {"data": ["The operation lasted too long: It took 2,250 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,704 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,563 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,009 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,113 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,797 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,425 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,361 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,562 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,559 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,423 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,750 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 3,153 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,794 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,556 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,100 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 4, 0.020294266869609334, 0.0013577041223291413], "isController": false}, {"data": ["The operation lasted too long: It took 2,099 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["404/Not Found", 770, 3.906646372399797, 0.26135804354835973], "isController": false}, {"data": ["The operation lasted too long: It took 3,194 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,731 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,040 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,702 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 5, 0.025367833587011668, 0.0016971301529114268], "isController": false}, {"data": ["The operation lasted too long: It took 2,007 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,671 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,036 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,378 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,560 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,866 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,219 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,065 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,867 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 6, 0.030441400304414, 0.002036556183493712], "isController": false}, {"data": ["The operation lasted too long: It took 3,195 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,428 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,793 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,026 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,249 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,518 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,004 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,380 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,216 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,141 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,477 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 2, 0.010147133434804667, 6.788520611645707E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,038 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,220 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,868 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}, {"data": ["The operation lasted too long: It took 2,217 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 1, 0.0050735667174023336, 3.3942603058228533E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 294615, 19710, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8081 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 18838, "404/Not Found", 770, "The operation lasted too long: It took 2,867 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 6, "The operation lasted too long: It took 2,558 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 5, "The operation lasted too long: It took 2,702 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 5], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 294615, 19710, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:8081 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 18838, "404/Not Found", 770, "The operation lasted too long: It took 2,867 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 6, "The operation lasted too long: It took 2,558 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 5, "The operation lasted too long: It took 2,702 milliseconds, but should not have lasted longer than 2,000 milliseconds.", 5], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
