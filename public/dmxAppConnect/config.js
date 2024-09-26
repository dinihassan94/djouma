dmx.config({
  "index": {
    "var2": {
      "meta": null,
      "outputType": "text"
    },
    "repeat1": {
      "meta": null,
      "outputType": "text"
    },
    "iterator1": {
      "meta": null,
      "outputType": "text"
    },
    "tableRepeat2": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "text",
          "name": "trid"
        },
        {
          "type": "text",
          "name": "trdate"
        },
        {
          "type": "text",
          "name": "libelle_type_mvt"
        },
        {
          "type": "text",
          "name": "num_contrat"
        },
        {
          "type": "text",
          "name": "nro_lettrage"
        },
        {
          "type": "number",
          "name": "credit"
        },
        {
          "type": "number",
          "name": "debit"
        },
        {
          "type": "text",
          "name": "ltype"
        },
        {
          "type": "text",
          "name": "type_mvt"
        },
        {
          "type": "number",
          "name": "ligneno"
        },
        {
          "type": "number",
          "name": "echu"
        },
        {
          "type": "number",
          "name": "echeance"
        },
        {
          "type": "number",
          "name": "echu_filter"
        },
        {
          "type": "text",
          "name": "date_lettrage"
        },
        {
          "type": "text",
          "name": "montant_tva"
        }
      ],
      "outputType": "array"
    },
    "var3": {
      "meta": null,
      "outputType": "number"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "tmp_MvtId"
      },
      {
        "type": "text",
        "name": "Nro_lettrage"
      },
      {
        "type": "text",
        "name": "totalAmount"
      },
      {
        "type": "text",
        "name": "id_contrat"
      }
    ],
    "sessionStorage": [
      {
        "type": "text",
        "name": "sessionVar"
      }
    ],
    "var4": {
      "meta": null,
      "outputType": "text"
    },
    "var5": {
      "outputType": "number"
    },
    "global": [
      {
        "type": "text",
        "name": "tetGlobal"
      }
    ],
    "VarListFactures": {
      "meta": null,
      "outputType": "object"
    }
  },
  "facture": {
    "query": [
      {
        "type": "text",
        "name": "new"
      }
    ]
  },
  "recu": {
    "dateVar": {
      "meta": null,
      "outputType": "text"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "argmt_cash "
      },
      {
        "type": "text",
        "name": "argmt_cheque  "
      },
      {
        "type": "text",
        "name": "argno_doc "
      },
      {
        "type": "text",
        "name": "argbanque "
      },
      {
        "type": "text",
        "name": "argusermaj "
      },
      {
        "type": "text",
        "name": "argmvtpaye_tx"
      },
      {
        "type": "text",
        "name": "argmode_paimnt"
      },
      {
        "type": "boolean",
        "name": "arg_checkassign"
      },
      {
        "type": "text",
        "name": "arg_totcr"
      },
      {
        "type": "text",
        "name": "arg_nomfenetre"
      }
    ]
  },
  "Recherche": {
    "localStorage": [
      {
        "type": "text",
        "name": "Searchcreteria"
      }
    ],
    "global": [
      {
        "type": "text",
        "name": "creteria"
      }
    ],
    "searchCritique": {
      "meta": null,
      "outputType": "object"
    },
    "sessionStorage": [
      {
        "type": "number",
        "name": "idContrat"
      },
      {
        "type": "text",
        "name": "PageFrom"
      }
    ],
    "data_view1": {
      "meta": [
        {
          "name": "CODE_TABLE",
          "type": "text"
        },
        {
          "name": "ID_LIGNE",
          "type": "number"
        },
        {
          "name": "LIB_COURT",
          "type": "text"
        },
        {
          "name": "LIB_LONG",
          "type": "text"
        },
        {
          "name": "NOM_TABLE",
          "type": "text"
        },
        {
          "name": "CODE_LIGNE",
          "type": "number"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "num_contrat",
          "type": "number"
        },
        {
          "name": "id_client",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "type_role",
          "type": "number"
        },
        {
          "name": "lib_court",
          "type": "text"
        }
      ],
      "outputType": "text"
    }
  },
  "RecuReport": {
    "localStorage": [
      {
        "type": "text",
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "argmt_cash"
      },
      {
        "type": "text",
        "name": "argmt_cheque"
      },
      {
        "type": "text",
        "name": "argno_doc"
      },
      {
        "type": "text",
        "name": "argbanque"
      },
      {
        "type": "text",
        "name": "argusermaj"
      },
      {
        "type": "text",
        "name": "argmvtpaye_tx"
      },
      {
        "type": "text",
        "name": "argmode_paimnt"
      },
      {
        "type": "boolean",
        "name": "arg_checkassign"
      },
      {
        "type": "text",
        "name": "arg_totcr"
      },
      {
        "type": "text",
        "name": "arg_nomfenetre"
      },
      {
        "type": "number",
        "name": "var_refresh"
      }
    ],
    "sessionStorage": [
      {
        "type": "number",
        "name": "IdContrat"
      },
      {
        "type": "text",
        "name": "jsonData"
      },
      {
        "type": "text",
        "name": "enccSuccess"
      }
    ],
    "query": [
      {
        "type": "text",
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "nro_lettrage"
      }
    ],
    "tableRepeat2": {
      "meta": [
        {
          "name": "n_piece",
          "type": "number"
        },
        {
          "name": "date_",
          "type": "datetime"
        },
        {
          "name": "type_mouvement",
          "type": "text"
        },
        {
          "name": "id_contrat",
          "type": "number"
        },
        {
          "name": "numero_lettrage",
          "type": "number"
        },
        {
          "name": "total",
          "type": "number"
        },
        {
          "name": "ligne_nro",
          "type": "number"
        },
        {
          "name": "mvt_type",
          "type": "text"
        },
        {
          "name": "sense",
          "type": "text"
        },
        {
          "name": "debit",
          "type": "number"
        },
        {
          "name": "credit",
          "type": "number"
        },
        {
          "name": "nro_cheque",
          "type": "text"
        }
      ],
      "outputType": "text"
    }
  },
  "Encaissement_divers": {
    "localStorage": [
      {
        "type": "text",
        "name": "Id_contrat"
      },
      {
        "type": "text",
        "name": "argmt_cash"
      },
      {
        "type": "text",
        "name": "argmt_cheque"
      },
      {
        "type": "text",
        "name": "argno_doc"
      },
      {
        "type": "text",
        "name": "argbanque"
      },
      {
        "type": "text",
        "name": "argusermaj"
      },
      {
        "type": "text",
        "name": "argmvtpaye_tx"
      },
      {
        "type": "text",
        "name": "argmode_paimnt"
      },
      {
        "type": "boolean",
        "name": "arg_checkassign"
      },
      {
        "type": "text",
        "name": "arg_totcr"
      },
      {
        "type": "text",
        "name": "arg_nomfenetre"
      }
    ],
    "tableRepeat2": {
      "meta": [
        {
          "type": "text",
          "name": "trid"
        },
        {
          "type": "text",
          "name": "trdate"
        },
        {
          "type": "text",
          "name": "libelle_type_mvt"
        },
        {
          "type": "text",
          "name": "num_contrat"
        },
        {
          "type": "text",
          "name": "nro_lettrage"
        },
        {
          "type": "number",
          "name": "credit"
        },
        {
          "type": "number",
          "name": "debit"
        },
        {
          "type": "text",
          "name": "ltype"
        },
        {
          "type": "text",
          "name": "type_mvt"
        },
        {
          "type": "number",
          "name": "ligneno"
        },
        {
          "type": "number",
          "name": "echu"
        },
        {
          "type": "number",
          "name": "echeance"
        },
        {
          "type": "number",
          "name": "echu_filter"
        },
        {
          "type": "text",
          "name": "date_lettrage"
        },
        {
          "type": "text",
          "name": "montant_tva"
        }
      ],
      "outputType": "array"
    },
    "sessionStorage": [
      {
        "type": "text",
        "name": "jsonData"
      },
      {
        "type": "text",
        "name": "IdContrat"
      },
      {
        "type": "text",
        "name": "EnccSuccess"
      },
      {
        "type": "text",
        "name": "PageFrom"
      }
    ]
  },
  "form1": {
    "data_view1": {
      "outputType": "text"
    },
    "arr1": {
      "meta": {
        "name": "header",
        "type": "array",
        "sub": []
      },
      "outputType": "array"
    },
    "repeat1": {
      "meta": [],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [],
      "outputType": "array"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "argmt_cash"
      },
      {
        "type": "text",
        "name": "argmt_cheque"
      },
      {
        "type": "text",
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "argno_doc"
      },
      {
        "type": "text",
        "name": "argbanque"
      },
      {
        "type": "text",
        "name": "argusermaj"
      },
      {
        "type": "text",
        "name": "arg_Montant"
      },
      {
        "type": "text",
        "name": "argmvtpaye"
      },
      {
        "type": "text",
        "name": "argmode_paiment"
      },
      {
        "type": "boolean",
        "name": "arg_checkassign"
      },
      {
        "type": "text",
        "name": "arg_totcr"
      },
      {
        "type": "text",
        "name": "arg_nomfenetre"
      }
    ],
    "datastore1": [
      {
        "type": "number",
        "name": "N_Piece"
      },
      {
        "type": "text",
        "name": "Date_emission"
      },
      {
        "type": "text",
        "name": "Type_Mouvement"
      },
      {
        "type": "number",
        "name": "Debit"
      },
      {
        "type": "number",
        "name": "Credit"
      },
      {
        "type": "number",
        "name": "Montant"
      }
    ],
    "tableRepeat5": {
      "meta": [
        {
          "name": "num_facture",
          "type": "number"
        },
        {
          "name": "date_emission",
          "type": "datetime"
        },
        {
          "name": "num_contrat",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "montant",
          "type": "number"
        },
        {
          "name": "nro_lettrage",
          "type": "text"
        },
        {
          "name": "ano_fact",
          "type": "text"
        },
        {
          "name": "annulation",
          "type": "text"
        },
        {
          "name": "date_maj",
          "type": "datetime"
        },
        {
          "name": "user_maj",
          "type": "text"
        },
        {
          "name": "type_mvt",
          "type": "text"
        },
        {
          "name": "id_mvt",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "test1": {
    "query": [
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "argmt_cash"
      },
      {
        "type": "text",
        "name": "argmt_cheque"
      },
      {
        "type": "text",
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "argno_doc"
      },
      {
        "type": "text",
        "name": "argbanque"
      },
      {
        "type": "text",
        "name": "argusermaj"
      },
      {
        "type": "text",
        "name": "argmvtpaye_tx"
      },
      {
        "type": "text",
        "name": "argmode_paimnt"
      },
      {
        "type": "boolean",
        "name": "arg_checkassign"
      },
      {
        "type": "text",
        "name": "arg_totcr"
      },
      {
        "type": "text",
        "name": "arg_nomfenetre"
      },
      {
        "type": "text",
        "name": "arg_Montant"
      },
      {
        "type": "number",
        "name": "var_refresh"
      }
    ],
    "sessionStorage": [
      {
        "type": "number",
        "name": "idContrat"
      }
    ],
    "var1MontantTotal": {
      "meta": null,
      "outputType": "object"
    }
  },
  "EncaissementFature": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "jsonData"
      },
      {
        "type": "number",
        "name": "idContrat"
      },
      {
        "type": "text",
        "name": "enccSuccess"
      },
      {
        "type": "text",
        "name": "PageFrom"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "refresh"
      }
    ],
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id_client"
        },
        {
          "type": "text",
          "name": "nom"
        },
        {
          "type": "text",
          "name": "adresse"
        },
        {
          "type": "number",
          "name": "id_contrat"
        },
        {
          "type": "text",
          "name": "roletp"
        },
        {
          "type": "text",
          "name": "pletat"
        },
        {
          "type": "text",
          "name": "poscnt"
        },
        {
          "type": "number",
          "name": "id_pl"
        },
        {
          "type": "number",
          "name": "ps"
        },
        {
          "type": "text",
          "name": "codepl"
        },
        {
          "type": "text",
          "name": "solde"
        },
        {
          "type": "text",
          "name": "code_cpteur"
        },
        {
          "type": "text",
          "name": "date_construction"
        },
        {
          "type": "text",
          "name": "adr_physique"
        },
        {
          "type": "text",
          "name": "num_cpteur"
        },
        {
          "type": "number",
          "name": "type_role"
        }
      ],
      "outputType": "array"
    }
  }
});
