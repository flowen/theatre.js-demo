export default {
  revision: '98c05101-e345-46ec-b5c9-de84778ba70f',
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
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
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
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
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
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
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
                      time: 5,
                      interpolationDescriptor: {
                        __descriptorType: 'TimelinePointInterpolationDescriptor',
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
        duration: null,
      },
    },
  },
}
