-- This file is automatically generated using maintenance/generateSchemaChangeSql.php.
-- Source: sql/abstractSchemaChanges/patch-filearchive-fa_size_to_bigint.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
ALTER TABLE /*_*/filearchive
  CHANGE fa_size fa_size BIGINT UNSIGNED DEFAULT 0;
