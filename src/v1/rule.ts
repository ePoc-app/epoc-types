// Types to represents jsonlogic rules https://jsonlogic.com/
export type Operators = "var" | ">" | ">=" | "<" | "<=" | "===" | "!==" | "and" | "or";
export type Operand = number | string | boolean | Rule;
export type Operands = string | [Operand, Operand, ...Operand[]]; // minimum 2 operands or a value if operator is var

export type Rule = {
  [key in Operators]?: Operands;
};
