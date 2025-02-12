-- This file is automatically generated using maintenance/generateSchemaChangeSql.php.
-- Source: sql/abstractSchemaChanges/patch-page_props-pp_page.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
CREATE TEMPORARY TABLE /*_*/__temp__page_props AS
SELECT
  pp_page,
  pp_propname,
  pp_value,
  pp_sortkey
FROM /*_*/page_props;
DROP TABLE /*_*/page_props;


CREATE TABLE /*_*/page_props (
    pp_page INTEGER UNSIGNED NOT NULL,
    pp_propname BLOB NOT NULL,
    pp_value BLOB NOT NULL,
    pp_sortkey DOUBLE PRECISION DEFAULT NULL,
    PRIMARY KEY(pp_page, pp_propname)
  );
INSERT INTO /*_*/page_props (
    pp_page, pp_propname, pp_value, pp_sortkey
  )
SELECT
  pp_page,
  pp_propname,
  pp_value,
  pp_sortkey
FROM
  /*_*/__temp__page_props;
DROP TABLE /*_*/__temp__page_props;

CREATE UNIQUE INDEX pp_propname_page ON /*_*/page_props (pp_propname, pp_page);

CREATE UNIQUE INDEX pp_propname_sortkey_page ON /*_*/page_props (pp_propname, pp_sortkey, pp_page);
