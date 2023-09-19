<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/products">
    <html>
      <head>
        <title>joke </title>
      </head>
      <style>
        table,
        th,
        td {
          color: white;
          border: 1px solid black;
          border-color:white;
          margin-left: auto;
          margin-right: auto;
          width: 800px;
          text-align: center;
          font-size: 20px;
        }
        body {
          margin: 40px;
          padding: 40px;
          background-color:rgb(125, 116, 116);
        }
    
        h1 {
          color :white;
          display: flex;
          justify-content: center;
        }
        footer{
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          background-color:black;
          color: white;
          text-align: center;  
        }
      </style> 
      <body>
        <h1>joke</h1>
        <table>
          <tr>
            <th>category</th>
            <th>joke</th>
            
          </tr>
          <xsl:for-each select="joke">
            <tr>
              <td><xsl:value-of select="category"/></td>
              <td><xsl:value-of select="joke"/></td>
              
            </tr>
          </xsl:for-each>
        </table>
      </body>
      <footer>
        © Made by jagrati jain. All Rights Reserved.
      </footer>
    </html>
  </xsl:template>
</xsl:stylesheet>
