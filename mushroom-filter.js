const cards = document.querySelectorAll(".mushroom-guide .card");
const selectedSeason = document.querySelector("#season");
const selectedEdible = document.querySelector("#edible");
const noMatches = document.querySelector('.no-matches')

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const mushroomID = `mushroom-${index + 1}`
  card.style.viewTransitionName = ` card-${mushroomID}`
})

selectedSeason.addEventListener("change", updateFilter);
selectedEdible.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;

  if (!document.startViewTransition()) {
    filterCards()
    return;
  } 
    document.startViewTransition(() => filterCards())   
}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;
    const matchesSeason = currentFilters.season === season
    const matchesEdible = currentFilters.edible === edible

    if ((matchesEdible || currentFilters.edible === 'all') && (matchesSeason || currentFilters.season === 'all')) {
        card.hidden = false;
        hasVisibleCards = true;
    } else {
        card.hidden = true;
    }

    if (hasVisibleCards) {
      noMatches.hidden = true;
    } else {
      noMatches.hidden = false;
    }
  });
}


function enableFiltering() {
  selectedSeason.hidden = false;
  selectedEdible.hidden = false;
}

enableFiltering()