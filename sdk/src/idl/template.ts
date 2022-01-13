export type Template = {
  "version": "0.1.0",
  "name": "template",
  "instructions": [
    {
      "name": "createState",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "state",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "dec",
            "type": {
              "defined": "Decimal"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Decimal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "flags",
            "type": "u32"
          },
          {
            "name": "hi",
            "type": "u32"
          },
          {
            "name": "lo",
            "type": "u32"
          },
          {
            "name": "mid",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TemplateError",
      "msg": "Template error"
    }
  ]
};

export const IDL: Template = {
  "version": "0.1.0",
  "name": "template",
  "instructions": [
    {
      "name": "createState",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "state",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "dec",
            "type": {
              "defined": "Decimal"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Decimal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "flags",
            "type": "u32"
          },
          {
            "name": "hi",
            "type": "u32"
          },
          {
            "name": "lo",
            "type": "u32"
          },
          {
            "name": "mid",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TemplateError",
      "msg": "Template error"
    }
  ]
};
