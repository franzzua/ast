import { Module } from "./Module";
import { Node } from "./Node";
import { HasSpan } from "./HasSpan";
import { Span } from "./Span";
import { HasInterpreter } from "./HasInterpreter";
import { ModuleItem } from "./ModuleItem";
import { ModuleDeclaration } from "./ModuleDeclaration";
import { ImportDeclaration } from "./ImportDeclaration";
import { ImportSpecifier } from "./ImportSpecifier";
import { ImportDefaultSpecifier } from "./ImportDefaultSpecifier";
import { Identifier } from "./Identifier";
import { PatternBase } from "./PatternBase";
import { TsTypeAnnotation } from "./TsTypeAnnotation";
import { TsType } from "./TsType";
import { TsKeywordType } from "./TsKeywordType";
import { TsKeywordTypeKind } from "./TsKeywordTypeKind";
import { TsThisType } from "./TsThisType";
import { TsFnOrConstructorType } from "./TsFnOrConstructorType";
import { TsFunctionType } from "./TsFunctionType";
import { TsFnParameter } from "./TsFnParameter";
import { ArrayPattern } from "./ArrayPattern";
import { Pattern } from "./Pattern";
import { RestElement } from "./RestElement";
import { ObjectPattern } from "./ObjectPattern";
import { ObjectPatternProperty } from "./ObjectPatternProperty";
import { KeyValuePatternProperty } from "./KeyValuePatternProperty";
import { PropertyName } from "./PropertyName";
import { StringLiteral } from "./StringLiteral";
import { NumericLiteral } from "./NumericLiteral";
import { Computed } from "./Computed";
import { Expression } from "./Expression";
import { ThisExpression } from "./ThisExpression";
import { ExpressionBase } from "./ExpressionBase";
import { ArrayExpression } from "./ArrayExpression";
import { ExprOrSpread } from "./ExprOrSpread";
import { ObjectExpression } from "./ObjectExpression";
import { SpreadElement } from "./SpreadElement";
import { Property } from "./Property";
import { KeyValueProperty } from "./KeyValueProperty";
import { PropBase } from "./PropBase";
import { AssignmentProperty } from "./AssignmentProperty";
import { GetterProperty } from "./GetterProperty";
import { BlockStatement } from "./BlockStatement";
import { Statement } from "./Statement";
import { EmptyStatement } from "./EmptyStatement";
import { DebuggerStatement } from "./DebuggerStatement";
import { WithStatement } from "./WithStatement";
import { ReturnStatement } from "./ReturnStatement";
import { LabeledStatement } from "./LabeledStatement";
import { BreakStatement } from "./BreakStatement";
import { ContinueStatement } from "./ContinueStatement";
import { IfStatement } from "./IfStatement";
import { SwitchStatement } from "./SwitchStatement";
import { SwitchCase } from "./SwitchCase";
import { ThrowStatement } from "./ThrowStatement";
import { TryStatement } from "./TryStatement";
import { CatchClause } from "./CatchClause";
import { WhileStatement } from "./WhileStatement";
import { DoWhileStatement } from "./DoWhileStatement";
import { ForStatement } from "./ForStatement";
import { VariableDeclaration } from "./VariableDeclaration";
import { VariableDeclarationKind } from "./VariableDeclarationKind";
import { VariableDeclarator } from "./VariableDeclarator";
import { VariableDeclarationOrExpression } from "./VariableDeclarationOrExpression";
import { ForInStatement } from "./ForInStatement";
import { VariableDeclarationOrPattern } from "./VariableDeclarationOrPattern";
import { ForOfStatement } from "./ForOfStatement";
import { Declaration } from "./Declaration";
import { ClassDeclaration } from "./ClassDeclaration";
import { Class } from "./Class";
import { HasDecorator } from "./HasDecorator";
import { Decorator } from "./Decorator";
import { ClassMember } from "./ClassMember";
import { Constructor } from "./Constructor";
import { TsParameterProperty } from "./TsParameterProperty";
import { Accessibility } from "./Accessibility";
import { TsParameterPropertyParameter } from "./TsParameterPropertyParameter";
import { AssignmentPattern } from "./AssignmentPattern";
import { Parameter } from "./Parameter";
import { TsParameterPropertyOrParam } from "./TsParameterPropertyOrParam";
import { ClassMethod } from "./ClassMethod";
import { ClassMethodBase } from "./ClassMethodBase";
import { Fn } from "./Fn";
import { TsTypeParameterDeclaration } from "./TsTypeParameterDeclaration";
import { TsTypeParameter } from "./TsTypeParameter";
import { MethodKind } from "./MethodKind";
import { PrivateMethod } from "./PrivateMethod";
import { PrivateName } from "./PrivateName";
import { ClassProperty } from "./ClassProperty";
import { ClassPropertyBase } from "./ClassPropertyBase";
import { PrivateProperty } from "./PrivateProperty";
import { TsIndexSignature } from "./TsIndexSignature";
import { StaticBlock } from "./StaticBlock";
import { TsTypeParameterInstantiation } from "./TsTypeParameterInstantiation";
import { TsExpressionWithTypeArguments } from "./TsExpressionWithTypeArguments";
import { FunctionDeclaration } from "./FunctionDeclaration";
import { TsInterfaceDeclaration } from "./TsInterfaceDeclaration";
import { TsInterfaceBody } from "./TsInterfaceBody";
import { TsTypeElement } from "./TsTypeElement";
import { TsCallSignatureDeclaration } from "./TsCallSignatureDeclaration";
import { TsConstructSignatureDeclaration } from "./TsConstructSignatureDeclaration";
import { TsPropertySignature } from "./TsPropertySignature";
import { TsGetterSignature } from "./TsGetterSignature";
import { TsSetterSignature } from "./TsSetterSignature";
import { TsMethodSignature } from "./TsMethodSignature";
import { TsTypeAliasDeclaration } from "./TsTypeAliasDeclaration";
import { TsEnumDeclaration } from "./TsEnumDeclaration";
import { TsEnumMember } from "./TsEnumMember";
import { TsEnumMemberId } from "./TsEnumMemberId";
import { TsModuleDeclaration } from "./TsModuleDeclaration";
import { TsModuleName } from "./TsModuleName";
import { TsNamespaceBody } from "./TsNamespaceBody";
import { TsModuleBlock } from "./TsModuleBlock";
import { TsNamespaceDeclaration } from "./TsNamespaceDeclaration";
import { ExpressionStatement } from "./ExpressionStatement";
import { SetterProperty } from "./SetterProperty";
import { MethodProperty } from "./MethodProperty";
import { SpreadElementOrProperty } from "./SpreadElementOrProperty";
import { FunctionExpression } from "./FunctionExpression";
import { UnaryExpression } from "./UnaryExpression";
import { UnaryOperator } from "./UnaryOperator";
import { UpdateExpression } from "./UpdateExpression";
import { UpdateOperator } from "./UpdateOperator";
import { BinaryExpression } from "./BinaryExpression";
import { BinaryOperator } from "./BinaryOperator";
import { AssignmentExpression } from "./AssignmentExpression";
import { AssignmentOperator } from "./AssignmentOperator";
import { ExpressionOrPattern } from "./ExpressionOrPattern";
import { MemberExpression } from "./MemberExpression";
import { IdentifierOrPrivateNameOrComputedPropName } from "./IdentifierOrPrivateNameOrComputedPropName";
import { SuperPropExpression } from "./SuperPropExpression";
import { Super } from "./Super";
import { IdentifierOrComputedPropName } from "./IdentifierOrComputedPropName";
import { ConditionalExpression } from "./ConditionalExpression";
import { CallExpression } from "./CallExpression";
import { Import } from "./Import";
import { SuperOrImportOrExpression } from "./SuperOrImportOrExpression";
import { Argument } from "./Argument";
import { NewExpression } from "./NewExpression";
import { SequenceExpression } from "./SequenceExpression";
import { Literal } from "./Literal";
import { BooleanLiteral } from "./BooleanLiteral";
import { NullLiteral } from "./NullLiteral";
import { BigIntLiteral } from "./BigIntLiteral";
import { RegExpLiteral } from "./RegExpLiteral";
import { JSXText } from "./JSXText";
import { TemplateLiteral } from "./TemplateLiteral";
import { TemplateElement } from "./TemplateElement";
import { TaggedTemplateExpression } from "./TaggedTemplateExpression";
import { ArrowFunctionExpression } from "./ArrowFunctionExpression";
import { BlockStatementOrExpression } from "./BlockStatementOrExpression";
import { ClassExpression } from "./ClassExpression";
import { YieldExpression } from "./YieldExpression";
import { MetaProperty } from "./MetaProperty";
import { AwaitExpression } from "./AwaitExpression";
import { ParenthesisExpression } from "./ParenthesisExpression";
import { JSXMemberExpression } from "./JSXMemberExpression";
import { JSXObject } from "./JSXObject";
import { JSXNamespacedName } from "./JSXNamespacedName";
import { JSXEmptyExpression } from "./JSXEmptyExpression";
import { JSXElement } from "./JSXElement";
import { JSXOpeningElement } from "./JSXOpeningElement";
import { JSXElementName } from "./JSXElementName";
import { JSXAttributeOrSpread } from "./JSXAttributeOrSpread";
import { JSXAttribute } from "./JSXAttribute";
import { JSXAttributeName } from "./JSXAttributeName";
import { JSXAttrValue } from "./JSXAttrValue";
import { JSXExpressionContainer } from "./JSXExpressionContainer";
import { JSXExpression } from "./JSXExpression";
import { JSXFragment } from "./JSXFragment";
import { JSXOpeningFragment } from "./JSXOpeningFragment";
import { JSXElementChild } from "./JSXElementChild";
import { JSXSpreadChild } from "./JSXSpreadChild";
import { JSXClosingFragment } from "./JSXClosingFragment";
import { JSXClosingElement } from "./JSXClosingElement";
import { TsTypeAssertion } from "./TsTypeAssertion";
import { TsConstAssertion } from "./TsConstAssertion";
import { TsNonNullExpression } from "./TsNonNullExpression";
import { TsAsExpression } from "./TsAsExpression";
import { TsSatisfiesExpression } from "./TsSatisfiesExpression";
import { TsInstantiation } from "./TsInstantiation";
import { OptionalChainingExpression } from "./OptionalChainingExpression";
import { MemberExpressionOrOptionalChainingCall } from "./MemberExpressionOrOptionalChainingCall";
import { Invalid } from "./Invalid";
import { AssignmentPatternProperty } from "./AssignmentPatternProperty";
import { TsConstructorType } from "./TsConstructorType";
import { TsTypeReference } from "./TsTypeReference";
import { TsEntityName } from "./TsEntityName";
import { TsQualifiedName } from "./TsQualifiedName";
import { TsTypeQuery } from "./TsTypeQuery";
import { TsTypeQueryExpr } from "./TsTypeQueryExpr";
import { TsImportType } from "./TsImportType";
import { TsTypeLiteral } from "./TsTypeLiteral";
import { TsArrayType } from "./TsArrayType";
import { TsTupleType } from "./TsTupleType";
import { TsTupleElement } from "./TsTupleElement";
import { TsOptionalType } from "./TsOptionalType";
import { TsRestType } from "./TsRestType";
import { TsUnionOrIntersectionType } from "./TsUnionOrIntersectionType";
import { TsUnionType } from "./TsUnionType";
import { TsIntersectionType } from "./TsIntersectionType";
import { TsConditionalType } from "./TsConditionalType";
import { TsInferType } from "./TsInferType";
import { TsParenthesizedType } from "./TsParenthesizedType";
import { TsTypeOperator } from "./TsTypeOperator";
import { TsTypeOperatorOp } from "./TsTypeOperatorOp";
import { TsIndexedAccessType } from "./TsIndexedAccessType";
import { TsMappedType } from "./TsMappedType";
import { TruePlusMinus } from "./TruePlusMinus";
import { TsLiteralType } from "./TsLiteralType";
import { TsLiteral } from "./TsLiteral";
import { TsTypePredicate } from "./TsTypePredicate";
import { TsThisTypeOrIdent } from "./TsThisTypeOrIdent";
import { ImportNamespaceSpecifier } from "./ImportNamespaceSpecifier";
import { ModuleExportName } from "./ModuleExportName";
import { ExportDeclaration } from "./ExportDeclaration";
import { ExportNamedDeclaration } from "./ExportNamedDeclaration";
import { ExportSpecifier } from "./ExportSpecifier";
import { ExportNamespaceSpecifier } from "./ExportNamespaceSpecifier";
import { ExportDefaultSpecifier } from "./ExportDefaultSpecifier";
import { ExportDefaultDeclaration } from "./ExportDefaultDeclaration";
import { DefaultDecl } from "./DefaultDecl";
import { ExportDefaultExpression } from "./ExportDefaultExpression";
import { ExportAllDeclaration } from "./ExportAllDeclaration";
import { TsImportEqualsDeclaration } from "./TsImportEqualsDeclaration";
import { TsModuleReference } from "./TsModuleReference";
import { TsExternalModuleReference } from "./TsExternalModuleReference";
import { TsExportAssignment } from "./TsExportAssignment";
import { TsNamespaceExportDeclaration } from "./TsNamespaceExportDeclaration";

export const swcSchema = [
	Module,
	Node,
	HasSpan,
	Span,
	HasInterpreter,
	ModuleItem,
	ModuleDeclaration,
	ImportDeclaration,
	ImportSpecifier,
	ImportDefaultSpecifier,
	Identifier,
	PatternBase,
	TsTypeAnnotation,
	TsType,
	TsKeywordType,
	TsKeywordTypeKind,
	TsThisType,
	TsFnOrConstructorType,
	TsFunctionType,
	TsFnParameter,
	ArrayPattern,
	Pattern,
	RestElement,
	ObjectPattern,
	ObjectPatternProperty,
	KeyValuePatternProperty,
	PropertyName,
	StringLiteral,
	NumericLiteral,
	Computed,
	Expression,
	ThisExpression,
	ExpressionBase,
	ArrayExpression,
	ExprOrSpread,
	ObjectExpression,
	SpreadElement,
	Property,
	KeyValueProperty,
	PropBase,
	AssignmentProperty,
	GetterProperty,
	BlockStatement,
	Statement,
	EmptyStatement,
	DebuggerStatement,
	WithStatement,
	ReturnStatement,
	LabeledStatement,
	BreakStatement,
	ContinueStatement,
	IfStatement,
	SwitchStatement,
	SwitchCase,
	ThrowStatement,
	TryStatement,
	CatchClause,
	WhileStatement,
	DoWhileStatement,
	ForStatement,
	VariableDeclaration,
	VariableDeclarationKind,
	VariableDeclarator,
	VariableDeclarationOrExpression,
	ForInStatement,
	VariableDeclarationOrPattern,
	ForOfStatement,
	Declaration,
	ClassDeclaration,
	Class,
	HasDecorator,
	Decorator,
	ClassMember,
	Constructor,
	TsParameterProperty,
	Accessibility,
	TsParameterPropertyParameter,
	AssignmentPattern,
	Parameter,
	TsParameterPropertyOrParam,
	ClassMethod,
	ClassMethodBase,
	Fn,
	TsTypeParameterDeclaration,
	TsTypeParameter,
	MethodKind,
	PrivateMethod,
	PrivateName,
	ClassProperty,
	ClassPropertyBase,
	PrivateProperty,
	TsIndexSignature,
	StaticBlock,
	TsTypeParameterInstantiation,
	TsExpressionWithTypeArguments,
	FunctionDeclaration,
	TsInterfaceDeclaration,
	TsInterfaceBody,
	TsTypeElement,
	TsCallSignatureDeclaration,
	TsConstructSignatureDeclaration,
	TsPropertySignature,
	TsGetterSignature,
	TsSetterSignature,
	TsMethodSignature,
	TsTypeAliasDeclaration,
	TsEnumDeclaration,
	TsEnumMember,
	TsEnumMemberId,
	TsModuleDeclaration,
	TsModuleName,
	TsNamespaceBody,
	TsModuleBlock,
	TsNamespaceDeclaration,
	ExpressionStatement,
	SetterProperty,
	MethodProperty,
	SpreadElementOrProperty,
	FunctionExpression,
	UnaryExpression,
	UnaryOperator,
	UpdateExpression,
	UpdateOperator,
	BinaryExpression,
	BinaryOperator,
	AssignmentExpression,
	AssignmentOperator,
	ExpressionOrPattern,
	MemberExpression,
	IdentifierOrPrivateNameOrComputedPropName,
	SuperPropExpression,
	Super,
	IdentifierOrComputedPropName,
	ConditionalExpression,
	CallExpression,
	Import,
	SuperOrImportOrExpression,
	Argument,
	NewExpression,
	SequenceExpression,
	Literal,
	BooleanLiteral,
	NullLiteral,
	BigIntLiteral,
	RegExpLiteral,
	JSXText,
	TemplateLiteral,
	TemplateElement,
	TaggedTemplateExpression,
	ArrowFunctionExpression,
	BlockStatementOrExpression,
	ClassExpression,
	YieldExpression,
	MetaProperty,
	AwaitExpression,
	ParenthesisExpression,
	JSXMemberExpression,
	JSXObject,
	JSXNamespacedName,
	JSXEmptyExpression,
	JSXElement,
	JSXOpeningElement,
	JSXElementName,
	JSXAttributeOrSpread,
	JSXAttribute,
	JSXAttributeName,
	JSXAttrValue,
	JSXExpressionContainer,
	JSXExpression,
	JSXFragment,
	JSXOpeningFragment,
	JSXElementChild,
	JSXSpreadChild,
	JSXClosingFragment,
	JSXClosingElement,
	TsTypeAssertion,
	TsConstAssertion,
	TsNonNullExpression,
	TsAsExpression,
	TsSatisfiesExpression,
	TsInstantiation,
	OptionalChainingExpression,
	MemberExpressionOrOptionalChainingCall,
	Invalid,
	AssignmentPatternProperty,
	TsConstructorType,
	TsTypeReference,
	TsEntityName,
	TsQualifiedName,
	TsTypeQuery,
	TsTypeQueryExpr,
	TsImportType,
	TsTypeLiteral,
	TsArrayType,
	TsTupleType,
	TsTupleElement,
	TsOptionalType,
	TsRestType,
	TsUnionOrIntersectionType,
	TsUnionType,
	TsIntersectionType,
	TsConditionalType,
	TsInferType,
	TsParenthesizedType,
	TsTypeOperator,
	TsTypeOperatorOp,
	TsIndexedAccessType,
	TsMappedType,
	TruePlusMinus,
	TsLiteralType,
	TsLiteral,
	TsTypePredicate,
	TsThisTypeOrIdent,
	ImportNamespaceSpecifier,
	ModuleExportName,
	ExportDeclaration,
	ExportNamedDeclaration,
	ExportSpecifier,
	ExportNamespaceSpecifier,
	ExportDefaultSpecifier,
	ExportDefaultDeclaration,
	DefaultDecl,
	ExportDefaultExpression,
	ExportAllDeclaration,
	TsImportEqualsDeclaration,
	TsModuleReference,
	TsExternalModuleReference,
	TsExportAssignment,
	TsNamespaceExportDeclaration
]