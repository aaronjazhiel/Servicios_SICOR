'use strict';

const generarToken = 
{
    "access_token": "J9ZERxjQdJ05REgpaRGjadzYgnhpUL+NjrIDfLNkmdltzGH8MxvsRzIkTVc02nFV"
}


const consultarMedicamento = 
{
    "existencia": 97,
    "insumo": {
        "cantidad": null,
        "clave": "010000105001",
        "clave_medicamento": "010000105001",
        "clave_presupuestal": null,
        "dosis": null,
        "frecuencia": null,
        "descripcion": "INSULINA HUMANA SUSPENSION INYECTABLE ACCION INTERMEDIA NPH CADA ml CONTIENE: INSULINA HUMANA ISOFANA (ORIGEN ADN RECOMBINANTE) 100 UI o INSULINA ZINC ISOFANA HUMANA (ORIGEN ADN RECOMBINANTE) 100 UI. ENVASE CON UN FRASCO AMPULA CON 10 ml.",
        "esAntibiotico": false,
        "cantidad_maxima": 3,
        "cantidad_minima": 0,
        "dias": 25,
        "validaCantidadMax": "La cantidad m&#225;xima permitida para el medicamento (010000105001) no debe ser mayor a 3",
        "validaDiasMin": "El medicamento (010000105001), no puede ser prescrito antes de 25 d&#237;as",
        "maxExcedido": "La cantidad de la clave: (010000105001) excedi&#243; el m&#225;ximo de 3,cantidad ingresada: ",
        "minExcedido": "La cantidad de la clave: (010000105001) excedi&#243; el m&#237;nimo de 0,cantidad ingresada: ",
        "alertaMaxCantMinDia": "Con fundamento en las disposiciones referidas en el oficio circular N&#176; 120.121/099, DA/245, DM/010, DTED/052 DD/153 y CHR/017 de fecha 25 de enero de 2016, se est&#225;n excediendo los siguientes valores: ",
        "alertaMaxCantMinDia2": "Esta receta requiere autorizaci&#243;n por &quot;Asistentes de la Direcci&#243;n&quot; y/o el &quot;Responsable designado&quot; &#191;Desea continuar? "
    },
    "mensaje": null,
    "tipo": "M"
}

const registrarReceta = 
[
    {
        "derechoHabiente": {
            "nombre": "CARMEN ILEANA                           ",
            "ape_pat": "CID                                     ",
            "ape_mat": "ZANABRIA                                ",
            "curp": "ZASI650607MDFNNL03",
            "expediente": "CIZC900626/60",
            "num_issste": "8832818",
            "id_indirecto": "9815501",
            "rfc": "CIZC900626   ",
            "edad": null,
            "sexo": null
        },
        "estatus": "Pendiente de surtir",
        "fecha_emision": "15 Mar 2018 21:40:42 GMT",
        "folio": "18033622730422030010R",
        "id_receta_siam": 156417560,
        "respuestaCodigo": "0",
        "respuestaMensaje": null,
        "surtir_hasta": "20 Mar 2018 06:00:00 GMT",
        "movimientos": [
            {
                "cantidad": 3,
                "negado": 0,
                "fecha_surtimiento": "15 Mar 2018 21:40:42 GMT",
                "clave": "010000270700"
            },
            {
                "cantidad": 1,
                "negado": 1,
                "fecha_surtimiento": "15 Mar 2018 21:40:42 GMT",
                "clave": "010000211100"
            }
        ]
    },
    {
        "derechoHabiente": {
            "nombre": "CARMEN ILEANA                           ",
            "ape_pat": "CID                                     ",
            "ape_mat": "ZANABRIA                                ",
            "curp": "ZASI650607MDFNNL03",
            "expediente": "CIZC900626/60",
            "num_issste": "8832818",
            "id_indirecto": "9815501",
            "rfc": "CIZC900626   ",
            "edad": null,
            "sexo": null
        },
        "estatus": "Pendiente de surtir",
        "fecha_emision": "15 Mar 2018 21:40:45 GMT",
        "folio": "18033622730422030012R",
        "id_receta_siam": 156417561,
        "respuestaCodigo": "0",
        "respuestaMensaje": null,
        "surtir_hasta": "20 Mar 2018 06:00:00 GMT",
        "movimientos": [
            {
                "cantidad": 3,
                "negado": 0,
                "fecha_surtimiento": "15 Mar 2018 21:40:45 GMT",
                "clave": "010000044200"
            }
        ]
    }
]

const cancelarReceta = {
    "derechoHabiente": null,
    "estatus": null,
    "fecha_emision": null,
    "folio": null,
    "id_receta_siam": null,
    "respuestaCodigo": "0",
    "respuestaMensaje": "Eliminada: Mar 15 2018  3:19PM, Justificacion: Cancelacion de prueba",
    "surtir_hasta": null,
    "movimientos": null
}



module.exports = {
	generarToken,
	consultarMedicamento,
	registrarReceta,
	cancelarReceta
}
