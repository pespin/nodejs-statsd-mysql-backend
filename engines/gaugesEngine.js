/**
 *
 *
 */
function MySQLBackendGaugesEngine() {
	var self = this;
}


/**
 *
 *
 */
MySQLBackendGaugesEngine.prototype.buildQuerries = function(gauges, time_stamp) {

	var querries = [];

	var tables = {};
	 // Iterate on each gauge
	for (var gaugeName in gauges) {
		var gaugeValue = gauges[gaugeName];
		var columnName = gaugeName.split(".").pop();
		var tableName = gaugeName.slice(0, gaugeName - columnName.length - 1);
		tableName = tableName.replace(/\./g, "_");
		if (!tables[tableName]) {
			tables[tableName] = {};
		}
		tables[tableName][columnName] = gaugeValue;
	}

	for (var tableName in tables) {
		const columns = Object.keys(tables[tableName]);
		const values = Object.values(tables[tableName]);
		var columns_str = "`" + columns.join("`, `") + "`";
		var values_str = values.join();
		querries.push("INSERT INTO `gauges_statistics_"+tableName+"` ("+columns_str+") VALUES ("+values_str+");")
	}

	return querries;
}


/**
 *
 *
 */
exports.init = function() {
	var instance = new MySQLBackendGaugesEngine();
  return instance;
};
