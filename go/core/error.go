package core

type AttackOnTitanError struct {
	IsAttackOnTitanError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAttackOnTitanError(code string, msg string, ctx *Context) *AttackOnTitanError {
	return &AttackOnTitanError{
		IsAttackOnTitanError: true,
		Sdk:              "AttackOnTitan",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AttackOnTitanError) Error() string {
	return e.Msg
}
