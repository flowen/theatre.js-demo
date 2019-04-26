export default {
  revision: '706083cb-7786-478d-8a52-17a2bebaf277',
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
      'Scene 1 - left col / Word': {
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
      'Scene 1 - left col / Sentence': {
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
      'Scene 1 - right col / Word': {
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
      'Scene 1 - right col / Sentence': {
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
    },
  },
}
