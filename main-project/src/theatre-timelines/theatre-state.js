export const state = {
  revision: 'b800752d-75c3-4aee-8716-213bf5ce5660',
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
                      value: 35,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 31600,
                      value: 10,
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
                      value: -50,
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
                      value: -70,
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
          'Chorus - intro': {
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
                      time: 17100,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.7067874817244649, 0, 0.7080718760208906, 0],
                      },
                    },
                    {
                      time: 17675,
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
            },
          },
          'Chorus - word1': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 1,
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
                  ],
                },
              },
              scaleY: {
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
                      time: 16544.273510554263,
                      value: 2,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16710.10572340413,
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
              skewX: {
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
                      time: 16548.299512626407,
                      value: 25,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16689.273510554263,
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
              skewY: {
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
                  ],
                },
              },
              scaleZ: {
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
                  ],
                },
              },
              scaleX: {
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
                  ],
                },
              },
            },
          },
          'Chorus - word2': {
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
                      time: 16492.3492174157,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [1, 0.0198019801980198, 1, 0.0099009900990099],
                      },
                    },
                    {
                      time: 16587.26112256966,
                      value: 7.1,
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
              scaleY: {
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
                      time: 16783.831873491203,
                      value: -10,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16910,
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
              skewX: {
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
                      time: 16799.37903217235,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16905,
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
          'Chorus - word3': {
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
                      time: 16964.53155194994,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 17054.53155194994,
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
              scaleY: {
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
                      time: 17226.113567768854,
                      value: -10,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 17362.023895444305,
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
              skewX: {
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
                      time: 17296.113567768854,
                      value: -25,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 17415.234222056908,
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
          'Chorus - word4': {
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
                      time: 17580,
                      value: 0.5,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 17609.487239740727,
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
              scaleY: {
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
                  ],
                },
              },
              skewX: {
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
                  ],
                },
              },
            },
          },
          'Chorus - word5': {
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
                      time: 18127.5,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 18195,
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
              scaleY: {
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
                  ],
                },
              },
              skewX: {
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
                  ],
                },
              },
            },
          },
          'Chorus - word6': {
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
                      time: 18382.5,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 18467.636164474217,
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
              scaleY: {
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
                  ],
                },
              },
              skewX: {
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
                  ],
                },
              },
            },
          },
          'Chorus - word7': {
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
                      time: 18655,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 19010,
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
              scaleY: {
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
                  ],
                },
              },
              skewX: {
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
                  ],
                },
              },
            },
          },
          'Chorus - word8': {
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
                  ],
                },
              },
            },
          },
          'Chorus - word9': {
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
                  ],
                },
              },
            },
          },
          'Chorus - word10': {
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
                  ],
                },
              },
            },
          },
          'Chorus - word11': {
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
                  ],
                },
              },
            },
          },
          'Chorus - word12': {
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
                  ],
                },
              },
            },
          },
          'Chorus - word13': {
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
                  ],
                },
              },
            },
          },
          'Chorus - word14': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 1,
                },
              },
            },
          },
          'Chorus - word15': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 1,
                },
              },
            },
          },
          'Chorus - word16': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 1,
                },
              },
            },
          },
          'Chorus - word17': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 1,
                },
              },
            },
          },
          'Chorus - question 1': {
            props: {
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 0,
                },
              },
            },
          },
          'particles alpha': {
            props: {
              alpha: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 100,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 3250,
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
            },
          },
          blurPassResolution: {
            props: {
              blurPassResolution: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 1,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 35923.077424124276,
                      value: -4.103666666666667,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 36473.077424124276,
                      value: 0.39633333333333337,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 36673.077424124276,
                      value: -4.103666666666667,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 37101.52039267022,
                      value: 0.32133333333333347,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0, 0.18949180189554787],
                      },
                    },
                    {
                      time: 37272.5,
                      value: -3.8,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 1, 0.04405405926669693],
                      },
                    },
                    {
                      time: 37514.442893286134,
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
            },
          },
          bloomEffectResolution: {
            props: {
              bloomEffectResolution: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 1,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 20100,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 32000,
                      value: 0.975,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 34983.116301630536,
                      value: 0.97575,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 36850,
                      value: 0.99675,
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
          bloomEffectOpacity: {
            props: {
              bloomEffectOpacity: {
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
                      time: 34800,
                      value: 0.08,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 36206.66904989317,
                      value: 1.031111111111111,
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
          blurPassOpacity: {
            props: {
              blurPassOpacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 1,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 21912.598895357507,
                      value: -0.19211978228728077,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 1, 0],
                      },
                    },
                    {
                      time: 22916.028520818647,
                      value: 0.8078802177127193,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 24566.028520818647,
                      value: -0.19211978228728077,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 1, -0.04100268880945246],
                      },
                    },
                    {
                      time: 25100,
                      value: 0.825,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 25786.359847596726,
                      value: -0.14965684097805376,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0, -0.6216115855922763, 1, 0.06150403321417869],
                      },
                    },
                    {
                      time: 26070.33132677808,
                      value: 0.767462941309227,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 26835.121823812544,
                      value: -0.16031266131719102,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 27250,
                      value: 0.8,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 27902.544681168612,
                      value: -0.20175239922137633,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.9999999999999999, 0],
                      },
                    },
                    {
                      time: 28300,
                      value: 0.825,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 29183.452109995895,
                      value: -0.2639120060776543,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 29650,
                      value: 0.875,
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
          blurPass: {
            props: {
              resolution: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0.5,
                      time: 100,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.8807164745563225, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 7600,
                      value: 0.6175,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.3021451370323316, 0.008130081300813007, 0.5, 0],
                      },
                    },
                    {
                      time: 11800,
                      value: 0.5325,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 14900,
                      value: 0.75,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 21000,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 27030.899640143944,
                      value: 0.7478404471544715,
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
                      value: 0.1,
                      time: 100,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 9000,
                      value: 0.10026,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 13050,
                      value: 0.1,
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
          bloomPass: {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      time: 81.53669194063696,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 3700,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 21505.292266247896,
                      value: 1,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 24001.095206434184,
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
              resolution: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      time: 331.53669194063696,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 12250,
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
              distinction: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 2,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1600,
                      value: 4,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 21755.292266247896,
                      value: 4,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 23439.272739819888,
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
            },
          },
          scanlinePass: {
            props: {
              density: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0.001,
                      time: 1400,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [1, 0.014679627058123389, 0, 0.3100575282682007],
                      },
                    },
                    {
                      time: 1600,
                      value: 3.05,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.7195218629171023, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 3050,
                      value: 4.72,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.3910388544358563, 0.6597607705053855, 0.5, 0],
                      },
                    },
                    {
                      time: 40200,
                      value: 2,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 59173.43462614954,
                      value: 2.6575145246478873,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 72671.01159536185,
                      value: 4.917317341549295,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 88341.92722910836,
                      value: 1.4529581585297437,
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
                      value: 1,
                      time: 250,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 8900,
                      value: 0.225,
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
          'particle size': {
            props: {
              particleSize: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 2,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 8200,
                      value: 2.025,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.8422218670186745, 0],
                      },
                    },
                    {
                      time: 13500,
                      value: 0.05,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16357.008587846147,
                      value: 0.05,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0, -0.15954204801635974, 0, 0.7332807407947072],
                      },
                    },
                    {
                      time: 16528.004905782658,
                      value: 0.7,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 16850,
                      value: 0.7102433128980062,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.23058065617605933, 1.24922015096793, 0.5, 0],
                      },
                    },
                    {
                      time: 17140,
                      value: 1.3602433128980063,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 17303.990188434684,
                      value: 1.25,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 1, -0.6174815397819093],
                      },
                    },
                    {
                      time: 17606.675987094433,
                      value: 1.9338041039676925,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 20750,
                      value: 0.075,
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
