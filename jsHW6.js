function result(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenCount);
    console.log("Не парних чисел: " + oddCount);
    console.log("Відсоток парних до не парних: " + evenPercentage.toFixed(2) + "% / " + oddPercentage.toFixed(2) + "%");
}
result(1000);