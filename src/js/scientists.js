document.addEventListener('DOMContentLoaded', () => {
const scientists = [
  { name: 'Albert Einstein', scientistBorn: 1879, scientistDied: 1955},
  { name: 'Isaac Newton', scientistBorn: 1643, scientistDied: 1727},
  { name: 'Nicolaus Copernicus', scientistBorn: 1473, scientistDied: 1543},
  { name: 'Charles Darwin', scientistBorn: 1809, scientistDied: 1882},
  { name: 'Galileo Galilei', scientistBorn: 1564, scientistDied: 1642},
  { name: 'Marie Curie', scientistBorn: 1867, scientistDied: 1934},
  { name: 'James Clerk Maxwell', scientistBorn: 1831, scientistDied: 1879},
  { name: 'Louis Pasteur', scientistBorn: 1822, scientistDied: 1895},
  { name: 'Stephen Hawking', scientistBorn: 1942, scientistDied: 2018},
  { name: 'Niels Bohr', scientistBorn: 1885, scientistDied: 1962},
  { name: 'Michael Faraday', scientistBorn: 1791, scientistDied: 1867},
  { name: 'Richard Feynman', scientistBorn: 1918, scientistDied: 1988},
];
  const filterButtons = document.querySelectorAll('.scientist-filter-button');
  const containers = document.querySelectorAll('.scientist');
  let activeFilters = [];

  const lifespan = s => s.scientistDied - s.scientistBorn;
  const getFirstName = s => s.name.split(' ')[0];
  const getSurname = s => s.name.split(' ').slice(-1)[0];

  function render(list) {
    containers.forEach(c => (c.innerHTML = ''));
    list.slice(0, containers.length).forEach((s, i) => {
      containers[i].innerHTML = `
      <div class="scientist-text">
      <div class="scientist-name">${s.name}</div>
      <div class="scientist-years">${s.scientistBorn}–${s.scientistDied}</div>
      </div>
      `;
    });
  }

  function applyFilters() {
    let out = [...scientists];
    activeFilters.forEach(fn => {
      out = fn(out);
    });
    return out;
  }

  function toggleFilter(e, filterFn) {
    const btn = e.currentTarget;

    if (activeFilters[0] === filterFn) {
      activeFilters = [];
      btn.classList.remove('active');
    } else {
      filterButtons.forEach(b => b.classList.remove('active'));
      activeFilters = [filterFn];
      btn.classList.add('active');
    }

    render(applyFilters());
  }

  function zero(list) {
    return list.filter(s => s.scientistBorn >= 1801 && s.scientistBorn <= 1900);
  }
  function one(list) {
    return [...list].sort((a, b) => a.name.localeCompare(b.name, 'uk'));
  }
  function two(list) {
    return [...list].sort((a, b) => lifespan(a) - lifespan(b));
  }
  function three(list) {
    if (!list.length) return [];
    const youngest = list.reduce(
      (best, s) => (s.scientistBorn > best.scientistBorn ? s : best),
      list[0]
    );
    return [youngest];
  }
  function four(list) {
    return list.filter(s => s.name === 'Albert Einstein');
  }
  function five(list) {
    return list.filter(s => getSurname(s).startsWith('C'));
  }
  function six(list) {
    return list.filter(s => !getFirstName(s).startsWith('A'));
  }
  function seven(list) {
    if (!list.length) return [];
    const sorted = [...list].sort((a, b) => lifespan(a) - lifespan(b));
    return [sorted[0], sorted[sorted.length - 1]];
  }
  function eight(list) {
    return list.filter(s => {
      const f = (getFirstName(s)[0] || '').toUpperCase();
      const l = (getSurname(s)[0] || '').toUpperCase();
      return f && l && f === l;
    });
  }

  const filterFns = [zero, one, two, three, four, five, six, seven, eight];
  filterButtons.forEach((btn, i) => {
    btn.addEventListener('click', e => toggleFilter(e, filterFns[i]));
  });

  render(scientists);
});
