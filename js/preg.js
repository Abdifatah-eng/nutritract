

var Day = new Date();
var prgDiet = [
    {
        "DayOfWeek":"Sunday",
        "BreakFast":["Toast","Protein shake"],
        "Lunch":["Monk fish","Brown rice","Matooke","Mixed green salad with cucumber"],
        "Snack":["Candy"],
        "Dinner":["Grilled Turkey breast","Caesar salad","Green beams"]
    },
    {
        "DayOfWeek":"Monday",
        "BreakFast":["Boiled eggs","Bacon","Apple","Toast"],
        "Lunch":["Ham","cheese","Sandwitch with avocado"],
        "Snack":["Greek yogurt"],
        "Dinner":["Cold Lentil salad","Asparagus"]
    },
    {
        "DayOfWeek":"Tuesday",
        "BreakFast":["Berry smoothie","Chia seeds"],
        "Lunch":["Kale & Tuna salad","Avocado"],
        "Snack":["Berries"],
        "Dinner":["Grilled chicken salad"]
    },
    {
        "DayOfWeek":"Whenesday",
        "BreakFast":["Broccoli","Egg toast"],
        "Lunch":["Shrimp salad","Sweet potatoes"],
        "Snacks":["Nuts"],
        "Dinner":["Grilled Chicken"]
    },
    {
        "DayOfWeek":"Thursday",
        "BreakFast":["Avocado banana smoothie"],
        "Lunch":["Pesto shrimp pasta","Pork"],
        "Snacks":["Olive","Cheese"],
        "Dinner":["Flank Steak","Red Wine"]
    },
    {
        "DayOfWeek":"Friday",
        "BreakFast":["Cinamon oat-meal","Banana"],
        "Lunch":["Turkey wrap"],
        "Snack":["Beries","Grape fruit"],
        "Dinner":["Pecan","Pork chops"]
    },
    {
        "DayOfWeek":"Saturday",
        "BreakFast":["Whole Wheat Pita","Chia pudding"],
        "Lunch":["Brown Rice","Salmon fillet"],
        "Snack":["Apple"],
        "Dinner":["Green beans","Caesar salad"]
    },
    
]
function showMeals(){
    var  DayOfWeeks = prgDiet[Day.getDay()];
    //document.getElementById("meals_show").innerHTML = normalDiet[Day.getDay()];
    const entries = Object.entries(DayOfWeeks)
    console.log(entries)
    for([fruit, count] of entries) {
        var node = document.createElement("LI")
        var tnode = document.createTextNode(fruit + ": " + count+".")
        node.appendChild(tnode)
        document.getElementById("meals_show").append (node)
    }
    prgDiet=0;
    
}
