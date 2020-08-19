# Spreadsheets

## Group by column and count, Using Ifs

```
=QUERY(
  UNIQUE(
    QUERY(
      'SheetName'!1:1000,
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
      'Jobs'!1:1000,
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

## Filtering Data 
```
=QUERY('Sheet Name'!1:1000, "SELECT * WHERE C='Phone Call'")
```

Example:
```
=QUERY('Activities I Have Done'!1:1000, "SELECT * WHERE C='Phone Call'")
```

## Link to Another Cellw
1. Click on cell
2. Go to insert menu
3. Pick the cell range to link to