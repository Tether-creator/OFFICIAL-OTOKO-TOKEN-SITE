document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=otokotoken&vs_currencies=usd")
        .then(response => response.json())
        .then(data => {
            document.getElementById("token-price").innerText = "$" + data.otokotoken.usd;
        })
        .catch(error => console.error("Error fetching price:", error));
});
