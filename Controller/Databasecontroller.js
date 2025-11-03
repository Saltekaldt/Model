function searchDatabase() {
  const { search, course, farge } = model.viewstate.filterdisc;
  const nameInput = search.toLowerCase();

  return model.database.filter(disc => {
    const nameMatch =
      !nameInput || (disc.name && disc.name.toLowerCase().includes(nameInput));

    const courseMatch =
      !course || disc.bane === course;

    const fargeMatch =
      !farge || disc.farge === farge;

    return nameMatch && courseMatch && fargeMatch;
  });
};
