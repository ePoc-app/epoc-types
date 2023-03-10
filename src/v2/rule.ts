// Types to represents jsonlogic rules https://jsonlogic.com/
export type Operators = "var" | ">" | ">=" | "<" | "<=" | "===" | "!==" | "and" | "or";
export type Operand = number | string | Rule;
export type Operands = [Operand, Operand?];

export type Rule = {
  [key in Operators]?: Operands;
};
