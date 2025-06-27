import { context } from "./context.js";
import { Module } from "./Module.js";
import { Node } from "./Node.js";
import { Program } from "./Program.js";
import { Statement } from "./Statement.js";
import { ExpressionStatement } from "./ExpressionStatement.js";
import { VariableDeclaration } from "./VariableDeclaration.js";
import { VariableDeclarator } from "./VariableDeclarator.js";
import { ExportNamedDeclaration } from "./ExportNamedDeclaration.js";
import { FunctionDeclaration } from "./FunctionDeclaration.js";
import { BlockStatement } from "./BlockStatement.js";
import { Expression } from "./Expression.js";
import { CallExpression } from "./CallExpression.js";
import { TSTypeParameterInstantiation } from "./TSTypeParameterInstantiation.js";
import { BinaryExpression } from "./BinaryExpression.js";
import { Identifier } from "./Identifier.js";
import { Literal } from "./Literal.js";
import { IdentifierPattern } from "./IdentifierPattern.js";
import { MemberExpression } from "./MemberExpression.js";
import { AssignmentExpression } from "./AssignmentExpression.js";
import { ArrowFunctionExpression } from "./ArrowFunctionExpression.js";
import { Pattern } from "./Pattern.js";
import { TSTypeAnnotation } from "./TSTypeAnnotation.js";
import { TSType } from "./TSType.js";
import { TSStringKeyword } from "./TSStringKeyword.js";
import { TemplateLiteral } from "./TemplateLiteral.js";
import { TemplateElement, TemplateElementValue } from "./TemplateElement.js";
import { ArrayExpression } from "./ArrayExpression.js";
import { ObjectExpression, ObjectProperty, PropertyKey, PropertyKind } from "./ObjectExpression.js";
import { TaggedTemplateExpression } from "./TaggedTemplateExpression.js";
import { Super } from "./Super.js";
import { MetaProperty } from "./MetaProperty.js";
import { ThisExpression } from "./ThisExpression.js";
import { SequenceExpression } from "./SequenceExpression.js";
import { LogicalExpression, LogicalOperator } from "./LogicalExpression.js";
import { UnaryExpression, UnaryOperator } from "./UnaryExpression.js";
import { UpdateExpression, UpdateOperator } from "./UpdateExpression.js";
import { ConditionalExpression } from "./ConditionalExpression.js";
import { AwaitExpression } from "./AwaitExpression.js";
import { ChainExpression } from "./ChainExpression.js";
import { NewExpression } from "./NewExpression.js";
import { ImportExpression } from "./ImportExpression.js";
import { Class, ClassBody, ClassElement, Decorator } from "./Class.js";
import { MethodDefinition, MethodDefinitionKind, PropertyDefinition } from "./MethodDefinition.js";
import { PrivateIdentifier } from "./PrivateIdentifier.js";
import { StaticBlock } from "./StaticBlock.js";
import { BreakStatement } from "./BreakStatement.js";
import { ContinueStatement } from "./ContinueStatement.js";
import { DebuggerStatement } from "./DebuggerStatement.js";
import { DoWhileStatement } from "./DoWhileStatement.js";
import { EmptyStatement } from "./EmptyStatement.js";
import { ForInStatement } from "./ForInStatement.js";
import { ForOfStatement } from "./ForOfStatement.js";
import { ForStatement } from "./ForStatement.js";
import { IfStatement } from "./IfStatement.js";
import { LabeledStatement } from "./LabeledStatement.js";
import { ReturnStatement } from "./ReturnStatement.js";
import { SwitchStatement, SwitchCase } from "./SwitchStatement.js";
import { ThrowStatement } from "./ThrowStatement.js";
import { TryStatement, CatchClause } from "./TryStatement.js";
import { WhileStatement } from "./WhileStatement.js";
import { WithStatement } from "./WithStatement.js";
import { ImportDeclaration, ImportDeclarationSpecifier, ImportSpecifier, ImportDefaultSpecifier, ImportNamespaceSpecifier } from "./ImportDeclaration.js";
import { ExportAllDeclaration } from "./ExportAllDeclaration.js";
import { ExportDefaultDeclaration } from "./ExportDefaultDeclaration.js";
import { TSAnyKeyword, TSBigIntKeyword, TSBooleanKeyword, TSIntrinsicKeyword, TSNeverKeyword, TSNullKeyword, TSNumberKeyword, TSObjectKeyword, TSSymbolKeyword, TSUndefinedKeyword, TSUnknownKeyword, TSVoidKeyword } from "./TSKeyword.js";
import { TSArrayType } from "./TSArrayType.js";
import { TSConditionalType } from "./TSConditionalType.js";
import { TSConstructorType } from "./TSConstructorType.js";
import { TSFunctionType } from "./TSFunctionType.js";
import { FormalParameters } from "./FormalParameters.js";
export const schema = [
    context,
    Module,
    Node,
    Program,
    Statement,
    ExpressionStatement,
    VariableDeclaration,
    VariableDeclarator,
    ExportNamedDeclaration,
    FunctionDeclaration,
    BlockStatement,
    Expression,
    CallExpression,
    TSTypeParameterInstantiation,
    BinaryExpression,
    Identifier,
    Literal,
    IdentifierPattern,
    MemberExpression,
    AssignmentExpression,
    ArrowFunctionExpression,
    Pattern,
    TSTypeAnnotation,
    TSType,
    TSStringKeyword,
    TemplateLiteral,
    TemplateElement,
    TemplateElementValue,
    ArrayExpression,
    ObjectExpression,
    ObjectProperty,
    PropertyKey,
    PropertyKind,
    TaggedTemplateExpression,
    Super,
    MetaProperty,
    ThisExpression,
    SequenceExpression,
    LogicalExpression,
    LogicalOperator,
    UnaryExpression,
    UnaryOperator,
    UpdateExpression,
    UpdateOperator,
    ConditionalExpression,
    AwaitExpression,
    ChainExpression,
    NewExpression,
    ImportExpression,
    Class,
    ClassBody,
    ClassElement,
    Decorator,
    MethodDefinition,
    MethodDefinitionKind,
    PropertyDefinition,
    PrivateIdentifier,
    StaticBlock,
    BreakStatement,
    ContinueStatement,
    DebuggerStatement,
    DoWhileStatement,
    EmptyStatement,
    ForInStatement,
    ForOfStatement,
    ForStatement,
    IfStatement,
    LabeledStatement,
    ReturnStatement,
    SwitchStatement,
    SwitchCase,
    ThrowStatement,
    TryStatement,
    CatchClause,
    WhileStatement,
    WithStatement,
    ImportDeclaration,
    ImportDeclarationSpecifier,
    ImportSpecifier,
    ImportDefaultSpecifier,
    ImportNamespaceSpecifier,
    ExportAllDeclaration,
    ExportDefaultDeclaration,
    TSAnyKeyword,
    TSBigIntKeyword,
    TSBooleanKeyword,
    TSIntrinsicKeyword,
    TSNeverKeyword,
    TSNullKeyword,
    TSNumberKeyword,
    TSObjectKeyword,
    TSSymbolKeyword,
    TSUndefinedKeyword,
    TSUnknownKeyword,
    TSVoidKeyword,
    TSArrayType,
    TSConditionalType,
    TSConstructorType,
    TSFunctionType,
    FormalParameters
];

//# sourceMappingURL=index.js.map