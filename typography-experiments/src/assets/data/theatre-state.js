export default {
  revision: '7d666eaa-fd05-46c9-9248-1105b46b5aac',
  definitionVersion: '0.1.0',
  projectState: {
    timelineTemplates: {
      'One / Sentence': {
        objects: {
          'Main controls': {
            props: {
              progression: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 7625,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              offsetPerElement: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 500,
                },
              },
            },
          },
        },
        duration: 8125,
      },
      'One / Word': {
        objects: {
          Element: {
            props: {
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: -50,
                      time: 5,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 997.6367933103072,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      time: 5,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 990.9886514140286,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
      'Duplication / Sentence': {
        objects: {
          'Main controls': {
            props: {
              offsetPerElement: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 150,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 3000,
                      value: 150,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 3010,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              progression: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 4430,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: 4600,
      },
      'Duplication / Word': {
        objects: {
          Element: {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 258.51330250399053,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      time: 10,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 900,
                      value: 20,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              x: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      time: 3005.982429539779,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 3404.305654655726,
                      value: 15,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: 4145,
      },
      'Duplication left / Sentence': {
        objects: {
          'Main controls': {
            props: {
              progression: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              offsetPerElement: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 100,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 100,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1040,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: 2000,
      },
      'Duplication left / Word': {
        objects: {
          Element: {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 500,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      value: -20,
                      time: 2.5,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 500,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1400,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [1, -0.011904761904761904, 0.5, 0],
                      },
                    },
                    {
                      time: 1700,
                      value: -25,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1400,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1700,
                      value: 15,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
      'Duplication right / Sentence': {
        objects: {
          'Main controls': {
            props: {
              progression: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              offsetPerElement: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 100,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 100,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1050,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
      'Duplication right / Word': {
        objects: {
          Element: {
            props: {
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 20,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 500,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 500,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1400,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [
                          1,
                          -0.00443272121489955,
                          0.754030292501294,
                          -0.007751937984496125,
                        ],
                      },
                    },
                    {
                      time: 1700,
                      value: 25,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1400,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1700,
                      value: -15,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: 2000,
      },
      'Scene 0 - left col / Word': {
        objects: {
          Element: {
            props: {
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 20,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1700,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: -15,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1700,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: 15,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
      'Scene 0 - left col / Sentence': {
        objects: {
          'Main controls': {
            props: {
              progression: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              offsetPerElement: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 100,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1014.043778030658,
                      value: 100,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1308.789075574001,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
      'Scene 0 - right col / Word': {
        objects: {
          Element: {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1700,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: 15,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1700,
                      value: 0,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: -15,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 20,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
      'Scene 0 - right col / Sentence': {
        objects: {
          'Main controls': {
            props: {
              progression: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 5,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 2000,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              offsetPerElement: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 100,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: false,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1465,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
      'Scene 1 - untold stories': {
        objects: {
          untold: {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 170,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      value: -2,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [
                          0.8709746893501968,
                          6.938893903907228e-18,
                          0.5,
                          0,
                        ],
                      },
                    },
                    {
                      time: 272.41622020316714,
                      value: -10,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 362.9758713737183,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      value: 2,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [1, 0.010989010989010978, 0.5, 0],
                      },
                    },
                    {
                      time: 272.41622020316714,
                      value: -2,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 362.9758713737183,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      value: 150,
                      time: 2.5,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [
                          0.9165110654726807,
                          1.734723475976807e-17,
                          0.5,
                          0,
                        ],
                      },
                    },
                    {
                      time: 272.41622020316714,
                      value: -10,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 362.9758713737183,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
            },
          },
          stories: {
            props: {
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 1,
                },
              },
            },
          },
        },
        duration: 1102,
      },
      'Scene 1 - stories / Sentence': {
        objects: {
          'Main controls': {
            props: {
              offsetPerElement: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 100,
                },
              },
              progression: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 600,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1680,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: 1677.5,
      },
      'Scene 1 - stories / Word': {
        objects: {
          Element: {
            props: {
              skewX: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 0,
                },
              },
              skewY: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 0,
                },
              },
              y: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 60,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 1000,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                  ],
                },
              },
              opacity: {
                valueContainer: {
                  type: 'StaticValueContainer',
                  value: 1,
                },
              },
            },
          },
        },
        duration: 1575,
      },
      'Scene 1 - untold': {
        objects: {
          untold: {
            props: {
              opacity: {
                valueContainer: {
                  type: 'BezierCurvesOfScalarValues',
                  points: [
                    {
                      value: 0,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 135,
                      value: 1,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      value: 200,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 472.3338536029323,
                      value: -10,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 633.6269588542565,
                      value: 2,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 737.5,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      value: 2,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 474.8338536029323,
                      value: -2,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 636.1269588542565,
                      value: -0.5,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 737.5,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
                      value: 5,
                      time: 0,
                      interpolationDescriptor: {
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        connected: true,
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 474.8338536029323,
                      value: -5,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 633.6269588542565,
                      value: 4,
                      interpolationDescriptor: {
                        connected: true,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
                        interpolationType: 'CubicBezier',
                        handles: [0.5, 0, 0.5, 0],
                      },
                    },
                    {
                      time: 737.5,
                      value: 0,
                      interpolationDescriptor: {
                        connected: false,
                        __descriptorType:
                          'TimelinePointInterpolationDescriptor',
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
        duration: 995,
      },
    },
  },
}
