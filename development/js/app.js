document.addEventListener('DOMContentLoaded', () => {
    const btnRecipe = document.getElementById("button-recipe");
    btnRecipe.addEventListener("click", e => {
        console.log("Miejsce na popup 'Dodawanie nowego przepisu'");
    } );

    const btnPlan = document.getElementById("button-plan");
    btnPlan.addEventListener("click", e => {
        console.log("Miejsce na popup 'Dodawanie nowego planu'");
    } )
});

