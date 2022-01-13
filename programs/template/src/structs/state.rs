use anchor_lang::prelude::*;
use rust_decimal::Decimal;
#[account(zero_copy)]
#[repr(packed)]
#[derive(PartialEq, Default, Debug)]
pub struct State {
    pub admin: Pubkey,
    pub nonce: u8,
    pub authority: Pubkey,
    pub bump: u8,
    pub dec: Decimal,
}
