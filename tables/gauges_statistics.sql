-- Stadard DELIMITER is $$

-- Gauges statistics table
CREATE TABLE `gauges_statistics_dosmotics_power_meter_1_power_meter` (
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `export_energy` bigint(20) UNSIGNED NOT NULL,
  `import_energy` bigint(20) UNSIGNED NOT NULL,
  `voltage` bigint(20) UNSIGNED NOT NULL,
  `current` bigint(20) UNSIGNED NOT NULL,
  `active_export_power` bigint(20) UNSIGNED NOT NULL,
  `active_import_power` bigint(20) UNSIGNED NOT NULL,
  `reactive_power` bigint(20) UNSIGNED NOT NULL,
  `power_factor` bigint(20) UNSIGNED NOT NULL,
  `frequency` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `gauges_statistics_dosmotics_power_meter_1_power_meter`
  ADD PRIMARY KEY (`timestamp`);
