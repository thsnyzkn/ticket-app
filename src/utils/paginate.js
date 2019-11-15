const paginate = (events, table, numOfEvents ) => {
  const currentTable = parseInt(table)
  const perTable = parseInt(numOfEvents)
  const offset = (table -1) * perTable
  const paginatedItems =events.slice(offset,offset + perTable)

  return {
    currentTable,
    perTable,
    total:events.length,
    totalTables:Math.ceil(events.lenght/perTable),
    data:paginatedItems
  }
};

export default paginate;
