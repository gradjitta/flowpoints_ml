export function getTensorFlowLibrary() {
  return {
    "AbstractRNNCell": {
      "trainable": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dtype": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dynamic": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Activation": {
      "activation": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "ActivityRegularization": {
      "l1": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "l2": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Add": {},
    "AlphaDropout": {
      "rate": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "noise_shape": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "seed": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Average": {},
    "AveragePooling1D": {
      "pool_size": {
        "type": "int",
        "value": 2,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": "string",
        "value": "channels_last",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "AveragePooling2D": {
      "pool_size": {
        "type": "int",
        "value": [
          2,
          2
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": null,
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "AveragePooling3D": {
      "pool_size": {
        "type": "int",
        "value": [
          2,
          2,
          2
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": null,
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "BatchNormalization": {
      "axis": {
        "type": "int",
        "value": -1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "momentum": {
        "type": "float",
        "value": 0.99,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "epsilon": {
        "type": "float",
        "value": 0.001,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "center": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "scale": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "beta_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "gamma_initializer": {
        "type": "string",
        "value": "ones",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "moving_mean_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "moving_variance_initializer": {
        "type": "string",
        "value": "ones",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "beta_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "gamma_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "beta_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "gamma_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "renorm": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "renorm_clipping": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "renorm_momentum": {
        "type": "float",
        "value": 0.99,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "fused": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "trainable": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "virtual_batch_size": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "adjustment": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Bidirectional": {
      "layer": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "merge_mode": {
        "type": "string",
        "value": "concat",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "weights": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Concatenate": {
      "axis": {
        "type": "int",
        "value": -1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Conv1D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": "string",
        "value": "channels_last",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dilation_rate": {
        "type": "int",
        "value": [
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Conv2D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dilation_rate": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Conv2DTranspose": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "output_padding": {
        "type": null,
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dilation_rate": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Conv3D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dilation_rate": {
        "type": "int",
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Conv3DTranspose": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "output_padding": {
        "type": null,
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "ConvLSTM2D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dilation_rate": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": "string",
        "value": "tanh",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_activation": {
        "type": "string",
        "value": "hard_sigmoid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_initializer": {
        "type": "string",
        "value": "orthogonal",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "unit_forget_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_sequences": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "go_backwards": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "stateful": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Cropping1D": {
      "cropping": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Cropping2D": {
      "cropping": {
        "type": "int",
        "value": [
          0,
          0,
          0,
          0
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Cropping3D": {
      "cropping": {
        "type": "int",
        "value": [
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Dense": {
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "DenseFeatures": {
      "feature_columns": {
        "type": null,
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "trainable": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "DepthwiseConv2D": {
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depth_multiplier": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Dot": {
      "axes": {
        "type": "int",
        "value": null,
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "normalize": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Dropout": {
      "rate": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "noise_shape": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "seed": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "ELU": {
      "alpha": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Embedding": {
      "input_dim": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "output_dim": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "embeddings_initializer": {
        "type": "string",
        "value": "uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "embeddings_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "embeddings_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "mask_zero": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "input_length": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Flatten": {
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GRU": {
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": "string",
        "value": "tanh",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_activation": {
        "type": "string",
        "value": "sigmoid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_initializer": {
        "type": "string",
        "value": "orthogonal",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "implementation": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_sequences": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_state": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "go_backwards": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "stateful": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "unroll": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "time_major": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "reset_after": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GRUCell": {
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": "string",
        "value": "tanh",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_activation": {
        "type": "string",
        "value": "hard_sigmoid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_initializer": {
        "type": "string",
        "value": "orthogonal",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "implementation": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "reset_after": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GaussianDropout": {
      "rate": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GaussianNoise": {
      "stddev": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GlobalAveragePooling1D": {
      "data_format": {
        "type": "string",
        "value": "channels_last",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GlobalAveragePooling2D": {
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GlobalAveragePooling3D": {
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GlobalMaxPool1D": {
      "data_format": {
        "type": "string",
        "value": "channels_last",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GlobalMaxPool2D": {
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "GlobalMaxPool3D": {
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "InputSpec": {
      "dtype": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "shape": {
        "type": null,
        "value": null,
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "ndim": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "max_ndim": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "min_ndim": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "axes": {
        "type": "string",
        "value": "None)",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "LSTM": {
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": "string",
        "value": "tanh",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_activation": {
        "type": "string",
        "value": "sigmoid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_initializer": {
        "type": "string",
        "value": "orthogonal",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "unit_forget_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "implementation": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_sequences": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_state": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "go_backwards": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "stateful": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "time_major": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "unroll": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "LSTMCell": {
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": "string",
        "value": "tanh",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_activation": {
        "type": "string",
        "value": "hard_sigmoid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_initializer": {
        "type": "string",
        "value": "orthogonal",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "unit_forget_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "implementation": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Lambda": {
      "function": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "output_shape": {
        "type": null,
        "value": null,
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "mask": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "arguments": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Layer": {
      ")": {
        "type": null,
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "LeakyReLU": {
      "alpha": {
        "type": "float",
        "value": 0.3,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "LinearModel": {
      "feature_columns": {
        "type": null,
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "sparse_combiner": {
        "type": "string",
        "value": "sum",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "trainable": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "LocallyConnected1D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "implementation": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "LocallyConnected2D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "implementation": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Masking": {
      "mask_value": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "MaxPool1D": {
      "pool_size": {
        "type": "int",
        "value": 2,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": "string",
        "value": "channels_last",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "MaxPool2D": {
      "pool_size": {
        "type": "int",
        "value": [
          2,
          2
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": null,
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "MaxPool3D": {
      "pool_size": {
        "type": "int",
        "value": [
          2,
          2,
          2
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": null,
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Maximum": {},
    "Minimum": {},
    "Multiply": {},
    "PReLU": {
      "alpha_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "alpha_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "alpha_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "shared_axes": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Permute": {
      "dims": {
        "type": "int",
        "value": null,
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "RNN": {
      "cell": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_sequences": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_state": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "go_backwards": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "stateful": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "unroll": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "time_major": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "ReLU": {
      "max_value": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "negative_slope": {
        "type": "int",
        "value": 0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "threshold": {
        "type": "int",
        "value": 0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "RepeatVector": {
      "n": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Reshape": {
      "target_shape": {
        "type": "int",
        "value": null,
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "SeparableConv1D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dilation_rate": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depth_multiplier": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "pointwise_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "pointwise_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "pointwise_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "SeparableConv2D": {
      "filters": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_size": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "strides": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "padding": {
        "type": "string",
        "value": "valid",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dilation_rate": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "depth_multiplier": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "pointwise_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "pointwise_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "depthwise_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "pointwise_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "SimpleRNN": {
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": "string",
        "value": "tanh",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_initializer": {
        "type": "string",
        "value": "orthogonal",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activity_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_sequences": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "return_state": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "go_backwards": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "stateful": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "unroll": {
        "type": "bool",
        "value": false,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "SimpleRNNCell": {
      "units": {
        "type": "int",
        "value": 1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "activation": {
        "type": "string",
        "value": "tanh",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "use_bias": {
        "type": "bool",
        "value": true,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_initializer": {
        "type": "string",
        "value": "glorot_uniform",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_initializer": {
        "type": "string",
        "value": "orthogonal",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_initializer": {
        "type": "string",
        "value": "zeros",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_regularizer": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "kernel_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "bias_constraint": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "recurrent_dropout": {
        "type": "float",
        "value": 0.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Softmax": {
      "axis": {
        "type": "int",
        "value": -1,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "SpatialDropout1D": {
      "rate": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "SpatialDropout2D": {
      "rate": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "SpatialDropout3D": {
      "rate": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "StackedRNNCells": {
      "cells": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Subtract": {},
    "ThresholdedReLU": {
      "theta": {
        "type": "float",
        "value": 1.0,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "TimeDistributed": {
      "layer": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "UpSampling1D": {
      "size": {
        "type": "int",
        "value": 2,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "UpSampling2D": {
      "size": {
        "type": "int",
        "value": [
          2,
          2
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      },
      "interpolation": {
        "type": "string",
        "value": "nearest",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "UpSampling3D": {
      "size": {
        "type": "int",
        "value": [
          2,
          2,
          2
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "Wrapper": {
      "layer": {
        "type": "",
        "value": null,
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "ZeroPadding1D": {
      "padding": {
        "type": "int",
        "value": [
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "ZeroPadding2D": {
      "padding": {
        "type": "int",
        "value": [
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    },
    "ZeroPadding3D": {
      "padding": {
        "type": "int",
        "value": [
          1,
          1,
          1
        ],
        "istuple": true,
        "min": -Infinity,
        "max": Infinity
      },
      "data_format": {
        "type": null,
        "value": "None",
        "istuple": false,
        "min": -Infinity,
        "max": Infinity
      }
    }
  }
}