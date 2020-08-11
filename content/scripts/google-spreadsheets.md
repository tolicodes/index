# Spreadsheets

## Group by column and count, Using Ifs

```
=QUERY(
  UNIQUE(
    QUERY(
      SheetName!1:1000,
      "SELECT * 
        WHERE
          ColToCount is not null
          AND FilterByCol = 'FilterByVal' 
        ORDER BY ColToCount"
    )
  ),

  "SELECT 
    ColNumberToCount,
    count(ColNumberToCount)
  WHERE
    ColNumberToCount is not null
  GROUP BY ColNumberToCount"
)
```

Example:

```
=QUERY(
  UNIQUE(
    QUERY(
      Jobs!1:1000,
      "SELECT * 
        WHERE
          A is not null
          AND B = 'Apple' 
        ORDER BY A"
    )
  ),

  "SELECT 
    Col1,
    count(Col1)
  WHERE
    Col1 is not null
  GROUP BY Col1"
)
```

