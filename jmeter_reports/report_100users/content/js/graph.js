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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 765.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 7.0], [0.3, 7.0], [0.4, 8.0], [0.5, 8.0], [0.6, 8.0], [0.7, 8.0], [0.8, 31.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 31.0], [1.3, 31.0], [1.4, 31.0], [1.5, 31.0], [1.6, 31.0], [1.7, 31.0], [1.8, 31.0], [1.9, 31.0], [2.0, 31.0], [2.1, 31.0], [2.2, 31.0], [2.3, 31.0], [2.4, 31.0], [2.5, 31.0], [2.6, 31.0], [2.7, 31.0], [2.8, 31.0], [2.9, 31.0], [3.0, 31.0], [3.1, 31.0], [3.2, 31.0], [3.3, 31.0], [3.4, 31.0], [3.5, 31.0], [3.6, 31.0], [3.7, 31.0], [3.8, 31.0], [3.9, 31.0], [4.0, 32.0], [4.1, 32.0], [4.2, 32.0], [4.3, 32.0], [4.4, 32.0], [4.5, 32.0], [4.6, 32.0], [4.7, 32.0], [4.8, 32.0], [4.9, 32.0], [5.0, 32.0], [5.1, 32.0], [5.2, 32.0], [5.3, 32.0], [5.4, 32.0], [5.5, 32.0], [5.6, 33.0], [5.7, 33.0], [5.8, 33.0], [5.9, 33.0], [6.0, 33.0], [6.1, 33.0], [6.2, 33.0], [6.3, 33.0], [6.4, 33.0], [6.5, 33.0], [6.6, 33.0], [6.7, 33.0], [6.8, 33.0], [6.9, 33.0], [7.0, 33.0], [7.1, 33.0], [7.2, 34.0], [7.3, 34.0], [7.4, 34.0], [7.5, 34.0], [7.6, 34.0], [7.7, 34.0], [7.8, 34.0], [7.9, 34.0], [8.0, 39.0], [8.1, 39.0], [8.2, 50.0], [8.3, 50.0], [8.4, 55.0], [8.5, 55.0], [8.6, 55.0], [8.7, 55.0], [8.8, 55.0], [8.9, 55.0], [9.0, 55.0], [9.1, 55.0], [9.2, 55.0], [9.3, 55.0], [9.4, 55.0], [9.5, 55.0], [9.6, 55.0], [9.7, 55.0], [9.8, 56.0], [9.9, 56.0], [10.0, 56.0], [10.1, 56.0], [10.2, 56.0], [10.3, 56.0], [10.4, 56.0], [10.5, 56.0], [10.6, 56.0], [10.7, 56.0], [10.8, 56.0], [10.9, 56.0], [11.0, 56.0], [11.1, 56.0], [11.2, 56.0], [11.3, 56.0], [11.4, 56.0], [11.5, 56.0], [11.6, 56.0], [11.7, 56.0], [11.8, 56.0], [11.9, 56.0], [12.0, 56.0], [12.1, 56.0], [12.2, 56.0], [12.3, 56.0], [12.4, 56.0], [12.5, 56.0], [12.6, 56.0], [12.7, 56.0], [12.8, 56.0], [12.9, 56.0], [13.0, 56.0], [13.1, 56.0], [13.2, 56.0], [13.3, 56.0], [13.4, 57.0], [13.5, 57.0], [13.6, 57.0], [13.7, 57.0], [13.8, 57.0], [13.9, 57.0], [14.0, 57.0], [14.1, 57.0], [14.2, 57.0], [14.3, 57.0], [14.4, 57.0], [14.5, 57.0], [14.6, 57.0], [14.7, 57.0], [14.8, 57.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 57.0], [15.4, 57.0], [15.5, 57.0], [15.6, 57.0], [15.7, 57.0], [15.8, 57.0], [15.9, 57.0], [16.0, 57.0], [16.1, 57.0], [16.2, 57.0], [16.3, 57.0], [16.4, 57.0], [16.5, 57.0], [16.6, 57.0], [16.7, 57.0], [16.8, 57.0], [16.9, 57.0], [17.0, 57.0], [17.1, 57.0], [17.2, 57.0], [17.3, 57.0], [17.4, 57.0], [17.5, 57.0], [17.6, 58.0], [17.7, 58.0], [17.8, 58.0], [17.9, 58.0], [18.0, 58.0], [18.1, 58.0], [18.2, 58.0], [18.3, 58.0], [18.4, 58.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 58.0], [19.4, 58.0], [19.5, 58.0], [19.6, 58.0], [19.7, 58.0], [19.8, 58.0], [19.9, 58.0], [20.0, 58.0], [20.1, 58.0], [20.2, 58.0], [20.3, 58.0], [20.4, 59.0], [20.5, 59.0], [20.6, 59.0], [20.7, 59.0], [20.8, 59.0], [20.9, 59.0], [21.0, 59.0], [21.1, 59.0], [21.2, 59.0], [21.3, 59.0], [21.4, 59.0], [21.5, 59.0], [21.6, 59.0], [21.7, 59.0], [21.8, 59.0], [21.9, 59.0], [22.0, 59.0], [22.1, 59.0], [22.2, 63.0], [22.3, 63.0], [22.4, 64.0], [22.5, 64.0], [22.6, 65.0], [22.7, 65.0], [22.8, 72.0], [22.9, 72.0], [23.0, 74.0], [23.1, 74.0], [23.2, 75.0], [23.3, 75.0], [23.4, 75.0], [23.5, 75.0], [23.6, 77.0], [23.7, 77.0], [23.8, 77.0], [23.9, 77.0], [24.0, 79.0], [24.1, 79.0], [24.2, 84.0], [24.3, 84.0], [24.4, 87.0], [24.5, 87.0], [24.6, 88.0], [24.7, 88.0], [24.8, 88.0], [24.9, 88.0], [25.0, 89.0], [25.1, 89.0], [25.2, 93.0], [25.3, 93.0], [25.4, 99.0], [25.5, 99.0], [25.6, 100.0], [25.7, 100.0], [25.8, 101.0], [25.9, 101.0], [26.0, 102.0], [26.1, 102.0], [26.2, 102.0], [26.3, 102.0], [26.4, 107.0], [26.5, 107.0], [26.6, 109.0], [26.7, 109.0], [26.8, 111.0], [26.9, 111.0], [27.0, 112.0], [27.1, 112.0], [27.2, 112.0], [27.3, 112.0], [27.4, 112.0], [27.5, 112.0], [27.6, 112.0], [27.7, 112.0], [27.8, 112.0], [27.9, 112.0], [28.0, 112.0], [28.1, 112.0], [28.2, 112.0], [28.3, 112.0], [28.4, 112.0], [28.5, 112.0], [28.6, 112.0], [28.7, 112.0], [28.8, 112.0], [28.9, 112.0], [29.0, 112.0], [29.1, 112.0], [29.2, 112.0], [29.3, 112.0], [29.4, 112.0], [29.5, 112.0], [29.6, 112.0], [29.7, 112.0], [29.8, 112.0], [29.9, 112.0], [30.0, 112.0], [30.1, 112.0], [30.2, 112.0], [30.3, 112.0], [30.4, 112.0], [30.5, 112.0], [30.6, 112.0], [30.7, 112.0], [30.8, 112.0], [30.9, 112.0], [31.0, 112.0], [31.1, 112.0], [31.2, 112.0], [31.3, 112.0], [31.4, 112.0], [31.5, 112.0], [31.6, 112.0], [31.7, 112.0], [31.8, 113.0], [31.9, 113.0], [32.0, 113.0], [32.1, 113.0], [32.2, 113.0], [32.3, 113.0], [32.4, 113.0], [32.5, 113.0], [32.6, 113.0], [32.7, 113.0], [32.8, 113.0], [32.9, 113.0], [33.0, 113.0], [33.1, 113.0], [33.2, 113.0], [33.3, 113.0], [33.4, 113.0], [33.5, 113.0], [33.6, 114.0], [33.7, 114.0], [33.8, 114.0], [33.9, 114.0], [34.0, 114.0], [34.1, 114.0], [34.2, 114.0], [34.3, 114.0], [34.4, 114.0], [34.5, 114.0], [34.6, 115.0], [34.7, 115.0], [34.8, 115.0], [34.9, 115.0], [35.0, 115.0], [35.1, 115.0], [35.2, 115.0], [35.3, 115.0], [35.4, 115.0], [35.5, 115.0], [35.6, 115.0], [35.7, 115.0], [35.8, 115.0], [35.9, 115.0], [36.0, 115.0], [36.1, 115.0], [36.2, 115.0], [36.3, 115.0], [36.4, 115.0], [36.5, 115.0], [36.6, 115.0], [36.7, 115.0], [36.8, 115.0], [36.9, 115.0], [37.0, 115.0], [37.1, 115.0], [37.2, 116.0], [37.3, 116.0], [37.4, 116.0], [37.5, 116.0], [37.6, 116.0], [37.7, 116.0], [37.8, 116.0], [37.9, 116.0], [38.0, 116.0], [38.1, 116.0], [38.2, 117.0], [38.3, 117.0], [38.4, 117.0], [38.5, 117.0], [38.6, 117.0], [38.7, 117.0], [38.8, 118.0], [38.9, 118.0], [39.0, 118.0], [39.1, 118.0], [39.2, 118.0], [39.3, 118.0], [39.4, 119.0], [39.5, 119.0], [39.6, 119.0], [39.7, 119.0], [39.8, 119.0], [39.9, 119.0], [40.0, 119.0], [40.1, 119.0], [40.2, 119.0], [40.3, 119.0], [40.4, 119.0], [40.5, 119.0], [40.6, 120.0], [40.7, 120.0], [40.8, 120.0], [40.9, 120.0], [41.0, 120.0], [41.1, 120.0], [41.2, 120.0], [41.3, 120.0], [41.4, 120.0], [41.5, 120.0], [41.6, 121.0], [41.7, 121.0], [41.8, 121.0], [41.9, 121.0], [42.0, 122.0], [42.1, 122.0], [42.2, 122.0], [42.3, 122.0], [42.4, 123.0], [42.5, 123.0], [42.6, 124.0], [42.7, 124.0], [42.8, 125.0], [42.9, 125.0], [43.0, 125.0], [43.1, 125.0], [43.2, 125.0], [43.3, 125.0], [43.4, 126.0], [43.5, 126.0], [43.6, 126.0], [43.7, 126.0], [43.8, 126.0], [43.9, 126.0], [44.0, 127.0], [44.1, 127.0], [44.2, 127.0], [44.3, 127.0], [44.4, 128.0], [44.5, 128.0], [44.6, 128.0], [44.7, 128.0], [44.8, 129.0], [44.9, 129.0], [45.0, 129.0], [45.1, 129.0], [45.2, 129.0], [45.3, 129.0], [45.4, 130.0], [45.5, 130.0], [45.6, 131.0], [45.7, 131.0], [45.8, 131.0], [45.9, 131.0], [46.0, 137.0], [46.1, 137.0], [46.2, 140.0], [46.3, 140.0], [46.4, 141.0], [46.5, 141.0], [46.6, 142.0], [46.7, 142.0], [46.8, 142.0], [46.9, 144.0], [47.0, 144.0], [47.1, 152.0], [47.2, 152.0], [47.3, 153.0], [47.4, 153.0], [47.5, 155.0], [47.6, 155.0], [47.7, 156.0], [47.8, 156.0], [47.9, 165.0], [48.0, 165.0], [48.1, 166.0], [48.2, 166.0], [48.3, 166.0], [48.4, 166.0], [48.5, 169.0], [48.6, 169.0], [48.7, 169.0], [48.8, 169.0], [48.9, 171.0], [49.0, 171.0], [49.1, 171.0], [49.2, 171.0], [49.3, 175.0], [49.4, 175.0], [49.5, 181.0], [49.6, 181.0], [49.7, 186.0], [49.8, 186.0], [49.9, 187.0], [50.0, 187.0], [50.1, 187.0], [50.2, 187.0], [50.3, 191.0], [50.4, 191.0], [50.5, 195.0], [50.6, 195.0], [50.7, 205.0], [50.8, 205.0], [50.9, 205.0], [51.0, 205.0], [51.1, 208.0], [51.2, 208.0], [51.3, 214.0], [51.4, 214.0], [51.5, 215.0], [51.6, 215.0], [51.7, 221.0], [51.8, 221.0], [51.9, 227.0], [52.0, 227.0], [52.1, 229.0], [52.2, 229.0], [52.3, 230.0], [52.4, 230.0], [52.5, 231.0], [52.6, 231.0], [52.7, 231.0], [52.8, 231.0], [52.9, 235.0], [53.0, 235.0], [53.1, 236.0], [53.2, 236.0], [53.3, 240.0], [53.4, 240.0], [53.5, 243.0], [53.6, 243.0], [53.7, 245.0], [53.8, 245.0], [53.9, 249.0], [54.0, 249.0], [54.1, 250.0], [54.2, 250.0], [54.3, 251.0], [54.4, 251.0], [54.5, 254.0], [54.6, 254.0], [54.7, 257.0], [54.8, 257.0], [54.9, 258.0], [55.0, 258.0], [55.1, 258.0], [55.2, 258.0], [55.3, 259.0], [55.4, 259.0], [55.5, 261.0], [55.6, 261.0], [55.7, 262.0], [55.8, 262.0], [55.9, 270.0], [56.0, 270.0], [56.1, 274.0], [56.2, 274.0], [56.3, 275.0], [56.4, 275.0], [56.5, 282.0], [56.6, 282.0], [56.7, 283.0], [56.8, 283.0], [56.9, 283.0], [57.0, 283.0], [57.1, 284.0], [57.2, 284.0], [57.3, 286.0], [57.4, 286.0], [57.5, 289.0], [57.6, 289.0], [57.7, 291.0], [57.8, 291.0], [57.9, 296.0], [58.0, 296.0], [58.1, 296.0], [58.2, 296.0], [58.3, 299.0], [58.4, 299.0], [58.5, 300.0], [58.6, 300.0], [58.7, 300.0], [58.8, 300.0], [58.9, 301.0], [59.0, 301.0], [59.1, 302.0], [59.2, 302.0], [59.3, 302.0], [59.4, 302.0], [59.5, 303.0], [59.6, 303.0], [59.7, 304.0], [59.8, 304.0], [59.9, 304.0], [60.0, 304.0], [60.1, 306.0], [60.2, 306.0], [60.3, 307.0], [60.4, 307.0], [60.5, 307.0], [60.6, 307.0], [60.7, 308.0], [60.8, 308.0], [60.9, 310.0], [61.0, 310.0], [61.1, 310.0], [61.2, 310.0], [61.3, 313.0], [61.4, 313.0], [61.5, 319.0], [61.6, 319.0], [61.7, 319.0], [61.8, 319.0], [61.9, 323.0], [62.0, 323.0], [62.1, 332.0], [62.2, 332.0], [62.3, 334.0], [62.4, 334.0], [62.5, 335.0], [62.6, 335.0], [62.7, 344.0], [62.8, 344.0], [62.9, 347.0], [63.0, 347.0], [63.1, 347.0], [63.2, 347.0], [63.3, 349.0], [63.4, 349.0], [63.5, 349.0], [63.6, 349.0], [63.7, 360.0], [63.8, 360.0], [63.9, 360.0], [64.0, 360.0], [64.1, 362.0], [64.2, 362.0], [64.3, 370.0], [64.4, 370.0], [64.5, 375.0], [64.6, 375.0], [64.7, 389.0], [64.8, 389.0], [64.9, 389.0], [65.0, 389.0], [65.1, 398.0], [65.2, 398.0], [65.3, 398.0], [65.4, 398.0], [65.5, 402.0], [65.6, 402.0], [65.7, 403.0], [65.8, 403.0], [65.9, 404.0], [66.0, 404.0], [66.1, 409.0], [66.2, 409.0], [66.3, 415.0], [66.4, 415.0], [66.5, 418.0], [66.6, 418.0], [66.7, 419.0], [66.8, 419.0], [66.9, 425.0], [67.0, 425.0], [67.1, 426.0], [67.2, 426.0], [67.3, 430.0], [67.4, 430.0], [67.5, 431.0], [67.6, 431.0], [67.7, 433.0], [67.8, 433.0], [67.9, 436.0], [68.0, 436.0], [68.1, 441.0], [68.2, 441.0], [68.3, 443.0], [68.4, 443.0], [68.5, 443.0], [68.6, 443.0], [68.7, 448.0], [68.8, 448.0], [68.9, 449.0], [69.0, 449.0], [69.1, 454.0], [69.2, 454.0], [69.3, 456.0], [69.4, 456.0], [69.5, 458.0], [69.6, 458.0], [69.7, 459.0], [69.8, 459.0], [69.9, 461.0], [70.0, 461.0], [70.1, 462.0], [70.2, 462.0], [70.3, 462.0], [70.4, 462.0], [70.5, 462.0], [70.6, 462.0], [70.7, 463.0], [70.8, 463.0], [70.9, 463.0], [71.0, 463.0], [71.1, 463.0], [71.2, 463.0], [71.3, 463.0], [71.4, 463.0], [71.5, 463.0], [71.6, 463.0], [71.7, 463.0], [71.8, 463.0], [71.9, 463.0], [72.0, 463.0], [72.1, 463.0], [72.2, 463.0], [72.3, 463.0], [72.4, 463.0], [72.5, 463.0], [72.6, 463.0], [72.7, 464.0], [72.8, 464.0], [72.9, 464.0], [73.0, 464.0], [73.1, 464.0], [73.2, 464.0], [73.3, 464.0], [73.4, 464.0], [73.5, 464.0], [73.6, 464.0], [73.7, 464.0], [73.8, 464.0], [73.9, 464.0], [74.0, 464.0], [74.1, 464.0], [74.2, 464.0], [74.3, 464.0], [74.4, 464.0], [74.5, 464.0], [74.6, 464.0], [74.7, 465.0], [74.8, 465.0], [74.9, 465.0], [75.0, 465.0], [75.1, 465.0], [75.2, 465.0], [75.3, 465.0], [75.4, 465.0], [75.5, 465.0], [75.6, 465.0], [75.7, 465.0], [75.8, 465.0], [75.9, 465.0], [76.0, 465.0], [76.1, 465.0], [76.2, 465.0], [76.3, 465.0], [76.4, 465.0], [76.5, 465.0], [76.6, 465.0], [76.7, 467.0], [76.8, 467.0], [76.9, 467.0], [77.0, 467.0], [77.1, 468.0], [77.2, 468.0], [77.3, 468.0], [77.4, 468.0], [77.5, 469.0], [77.6, 469.0], [77.7, 469.0], [77.8, 469.0], [77.9, 469.0], [78.0, 469.0], [78.1, 469.0], [78.2, 469.0], [78.3, 470.0], [78.4, 470.0], [78.5, 470.0], [78.6, 470.0], [78.7, 471.0], [78.8, 471.0], [78.9, 471.0], [79.0, 471.0], [79.1, 471.0], [79.2, 471.0], [79.3, 472.0], [79.4, 472.0], [79.5, 473.0], [79.6, 473.0], [79.7, 473.0], [79.8, 473.0], [79.9, 473.0], [80.0, 473.0], [80.1, 473.0], [80.2, 473.0], [80.3, 474.0], [80.4, 474.0], [80.5, 474.0], [80.6, 474.0], [80.7, 474.0], [80.8, 474.0], [80.9, 474.0], [81.0, 474.0], [81.1, 475.0], [81.2, 475.0], [81.3, 475.0], [81.4, 475.0], [81.5, 476.0], [81.6, 476.0], [81.7, 476.0], [81.8, 476.0], [81.9, 476.0], [82.0, 476.0], [82.1, 477.0], [82.2, 477.0], [82.3, 479.0], [82.4, 479.0], [82.5, 479.0], [82.6, 479.0], [82.7, 480.0], [82.8, 480.0], [82.9, 481.0], [83.0, 481.0], [83.1, 481.0], [83.2, 481.0], [83.3, 482.0], [83.4, 482.0], [83.5, 482.0], [83.6, 482.0], [83.7, 482.0], [83.8, 482.0], [83.9, 482.0], [84.0, 482.0], [84.1, 482.0], [84.2, 482.0], [84.3, 483.0], [84.4, 483.0], [84.5, 483.0], [84.6, 483.0], [84.7, 483.0], [84.8, 483.0], [84.9, 483.0], [85.0, 483.0], [85.1, 483.0], [85.2, 483.0], [85.3, 483.0], [85.4, 483.0], [85.5, 484.0], [85.6, 484.0], [85.7, 484.0], [85.8, 484.0], [85.9, 484.0], [86.0, 484.0], [86.1, 484.0], [86.2, 484.0], [86.3, 484.0], [86.4, 484.0], [86.5, 484.0], [86.6, 484.0], [86.7, 484.0], [86.8, 484.0], [86.9, 484.0], [87.0, 484.0], [87.1, 484.0], [87.2, 484.0], [87.3, 485.0], [87.4, 485.0], [87.5, 485.0], [87.6, 485.0], [87.7, 485.0], [87.8, 485.0], [87.9, 485.0], [88.0, 485.0], [88.1, 485.0], [88.2, 485.0], [88.3, 486.0], [88.4, 486.0], [88.5, 486.0], [88.6, 486.0], [88.7, 486.0], [88.8, 486.0], [88.9, 487.0], [89.0, 487.0], [89.1, 487.0], [89.2, 487.0], [89.3, 487.0], [89.4, 487.0], [89.5, 487.0], [89.6, 487.0], [89.7, 487.0], [89.8, 487.0], [89.9, 488.0], [90.0, 488.0], [90.1, 488.0], [90.2, 488.0], [90.3, 489.0], [90.4, 489.0], [90.5, 492.0], [90.6, 492.0], [90.7, 495.0], [90.8, 495.0], [90.9, 502.0], [91.0, 502.0], [91.1, 505.0], [91.2, 505.0], [91.3, 509.0], [91.4, 509.0], [91.5, 512.0], [91.6, 512.0], [91.7, 513.0], [91.8, 513.0], [91.9, 516.0], [92.0, 516.0], [92.1, 523.0], [92.2, 523.0], [92.3, 525.0], [92.4, 525.0], [92.5, 527.0], [92.6, 527.0], [92.7, 535.0], [92.8, 535.0], [92.9, 564.0], [93.0, 564.0], [93.1, 575.0], [93.2, 575.0], [93.3, 584.0], [93.4, 584.0], [93.5, 587.0], [93.6, 587.0], [93.7, 587.0], [93.8, 587.0], [93.9, 592.0], [94.0, 592.0], [94.1, 597.0], [94.2, 597.0], [94.3, 599.0], [94.4, 599.0], [94.5, 602.0], [94.6, 602.0], [94.7, 606.0], [94.8, 606.0], [94.9, 609.0], [95.0, 609.0], [95.1, 612.0], [95.2, 612.0], [95.3, 618.0], [95.4, 618.0], [95.5, 619.0], [95.6, 619.0], [95.7, 627.0], [95.8, 627.0], [95.9, 630.0], [96.0, 630.0], [96.1, 630.0], [96.2, 630.0], [96.3, 637.0], [96.4, 637.0], [96.5, 642.0], [96.6, 642.0], [96.7, 645.0], [96.8, 645.0], [96.9, 650.0], [97.0, 650.0], [97.1, 655.0], [97.2, 655.0], [97.3, 657.0], [97.4, 657.0], [97.5, 663.0], [97.6, 663.0], [97.7, 664.0], [97.8, 664.0], [97.9, 665.0], [98.0, 665.0], [98.1, 668.0], [98.2, 668.0], [98.3, 669.0], [98.4, 669.0], [98.5, 676.0], [98.6, 676.0], [98.7, 677.0], [98.8, 677.0], [98.9, 681.0], [99.0, 681.0], [99.1, 683.0], [99.2, 683.0], [99.3, 755.0], [99.4, 755.0], [99.5, 762.0], [99.6, 762.0], [99.7, 763.0], [99.8, 763.0], [99.9, 765.0], [100.0, 765.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 128.0, "series": [{"data": [[0.0, 128.0], [300.0, 35.0], [600.0, 24.0], [700.0, 4.0], [100.0, 125.0], [200.0, 39.0], [400.0, 127.0], [500.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 454.0, "series": [{"data": [[0.0, 454.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 46.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 71.76999999999998, "minX": 1.77911766E12, "maxY": 71.76999999999998, "series": [{"data": [[1.77911766E12, 71.76999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77911766E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.0, "maxY": 475.0, "series": [{"data": [[2.0, 8.0], [3.0, 8.0], [4.0, 7.0], [5.0, 33.4], [6.0, 33.0], [7.0, 34.0], [8.0, 34.0], [9.0, 33.0], [10.0, 33.0], [11.0, 33.0], [12.0, 33.0], [13.0, 32.0], [14.0, 32.0], [15.0, 32.0], [16.0, 32.0], [17.0, 48.0], [18.0, 52.0], [19.0, 32.0], [20.0, 62.5], [21.0, 31.0], [22.0, 69.0], [23.0, 31.0], [24.0, 70.0], [25.0, 84.0], [26.0, 91.5], [27.0, 31.0], [28.0, 31.0], [29.0, 103.0], [30.0, 106.0], [31.0, 31.0], [32.0, 108.5], [33.0, 122.5], [34.0, 129.0], [35.0, 137.625], [36.0, 59.83333333333333], [37.0, 56.885714285714286], [38.0, 142.5], [39.0, 143.0], [40.0, 145.5], [41.0, 56.0], [43.0, 188.0], [42.0, 56.0], [45.0, 153.0], [44.0, 55.0], [47.0, 155.0], [46.0, 55.0], [48.0, 159.0], [49.0, 56.0], [51.0, 169.0], [50.0, 57.0], [52.0, 165.0], [53.0, 170.0], [54.0, 171.0], [55.0, 58.0], [56.0, 174.5], [57.0, 58.0], [58.0, 177.5], [59.0, 180.5], [61.0, 184.0], [60.0, 59.0], [62.0, 185.5], [63.0, 58.0], [67.0, 203.0], [66.0, 59.0], [65.0, 59.0], [64.0, 58.0], [68.0, 270.0], [69.0, 130.63999999999996], [70.0, 257.0], [71.0, 115.77777777777777], [74.0, 255.0], [75.0, 255.0], [73.0, 113.0], [72.0, 112.0], [77.0, 258.0], [78.0, 260.5], [79.0, 112.0], [76.0, 112.0], [80.0, 265.0], [81.0, 268.5], [83.0, 271.0], [82.0, 112.0], [84.0, 271.5], [86.0, 222.0], [87.0, 281.0], [85.0, 112.0], [89.0, 281.5], [90.0, 284.5], [91.0, 400.10344827586204], [88.0, 120.0], [93.0, 461.0], [95.0, 466.5], [94.0, 463.0], [92.0, 463.0], [96.0, 466.0], [98.0, 466.5], [99.0, 475.0], [97.0, 463.0], [100.0, 463.94915254237293], [1.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[71.76999999999998, 262.96800000000013]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1620.0, "minX": 1.77911766E12, "maxY": 3860261.1666666665, "series": [{"data": [[1.77911766E12, 3860261.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77911766E12, 1620.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77911766E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 262.96800000000013, "minX": 1.77911766E12, "maxY": 262.96800000000013, "series": [{"data": [[1.77911766E12, 262.96800000000013]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77911766E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 262.00800000000004, "minX": 1.77911766E12, "maxY": 262.00800000000004, "series": [{"data": [[1.77911766E12, 262.00800000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77911766E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.8159999999999992, "minX": 1.77911766E12, "maxY": 0.8159999999999992, "series": [{"data": [[1.77911766E12, 0.8159999999999992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77911766E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.77911766E12, "maxY": 765.0, "series": [{"data": [[1.77911766E12, 765.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77911766E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77911766E12, 488.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77911766E12, 682.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77911766E12, 187.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77911766E12, 611.8499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77911766E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 115.0, "minX": 29.0, "maxY": 431.0, "series": [{"data": [[157.0, 431.0], [314.0, 115.0], [29.0, 165.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 314.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 115.0, "minX": 29.0, "maxY": 429.0, "series": [{"data": [[157.0, 429.0], [314.0, 115.0], [29.0, 161.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 314.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.77911766E12, "maxY": 8.333333333333334, "series": [{"data": [[1.77911766E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77911766E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77911766E12, "maxY": 6.666666666666667, "series": [{"data": [[1.77911766E12, 6.666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77911766E12, 1.6666666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77911766E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.77911766E12, "maxY": 8.333333333333334, "series": [{"data": [[1.77911766E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77911766E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.77911766E12, "maxY": 8.333333333333334, "series": [{"data": [[1.77911766E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77911766E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

