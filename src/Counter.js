JScriptCodeDom.CodeParseException: Unexpected Operator:< , Line 5, Char 0 ---> System.Exception: Unexpected Operator:<
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.ParseForQuoteStart()
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.ParseLambdaFunction(CodeFunctionExpression func)
   at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ParseVarStatement(String vartype, Boolean processExport)
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   at ProtectorV1.Protect(String[] codes)
   at ProtectorV1.Protect(String code)
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e)