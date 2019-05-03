export const state = {
  revision: 'f7482594-7fa6-4de9-8fcf-8a097e9dfe61',
  definitionVersion: '0.1.0',
  projectState: {
    timelineTemplates: {
      'Main timeline': {
        objects: {
          Ball: {
            props: {
              y: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: -2,
                },
              },
            },
          },
          Attractor: {
            props: {
              x: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 268,
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 950,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [
                          0.00699661644642291,
                          0.8538461538461537,
                          0.3676675128356188,
                          0.8999999999999997,
                        ],
                      },
                    },
                    {
                      time: 905,
                      value: 955.15,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1377.5,
                      value: 950.875,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              z: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 421,
                },
              },
            },
          },
          'Scene 0 - Intro': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 28029.8288908245,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 28985,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 28029.8288908245,
                      value: 30,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 28985,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          'frequency limit': {
            props: {
              frequencyLimit: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 200,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16700,
                      value: 120,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          camera: {
            props: {
              z: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      time: 2000,
                      value: 9,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [1, 0.0151921810907986, 0.5, 0],
                      },
                    },
                    {
                      time: 12000,
                      value: 100,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16000,
                      value: 55,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          'Intro - intro': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 1000,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2500,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 7777.571778372296,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 9277.571778372296,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 20,
                      time: 1000,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2500,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          'Intro - credit MG': {
            props: {
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 20,
                      time: 2625.871941113692,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 4050,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 2625.871941113692,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 4125.871941113692,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 7777.571778372296,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 9277.571778372296,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          'Intro - credit RH': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      time: 3912.3980077225974,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 5412.398007722598,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 7777.571778372296,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 9277.571778372296,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      time: 3912.3980077225974,
                      value: 20,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 5342.552575709386,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          'Intro - credit AR': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 5311.537077851101,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 6811.537077851101,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 7777.571778372296,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 9277.571778372296,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 20,
                      time: 5311.537077851101,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 6714.958774852699,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          'Intro - presents': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 9205.832848327951,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 10705.832848327951,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 12205.832848327951,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 9205.832848327951,
                      value: 20,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 10705.832848327951,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          'Intro - title': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 11711.61730923254,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 13355.62644809034,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 13896.156727887756,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16002.480300751064,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 11765.922892031722,
                      value: 20,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 13305.62644809034,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
        },
        duration: 87400,
      },
    },
  },
}
