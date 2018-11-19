const propsMap = [
    {
        styleName: [ 'justifyContent','WebkitJustifyContent' ],
        ieAlias: '-ms-flex-pack',
        styleValues: {
            baseline: 'baseline',
            center: 'center',
            end: 'end',
            'flex-end': 'end',
            'flex-start': 'start',
            inherit: 'inherit',
            initial: 'initial',
            left: 'left',
            normal: 'normal',
            right: 'right',
            safe: 'safe',
            'space-around': 'distribute',
            'space-between': 'justify',
            'space-evenly': 'space-evenly',
            start: 'start',
            stretch: 'stretch',
            unsafe: 'unsafe',
            unset: 'unset',
        },
    },
    {
        styleName: [ 'alignItems','WebkitAlignItems' ],
        ieAlias: '-ms-flex-align',
        styleValues: {
            baseline: 'baseline',
            center: 'center',
            end: 'end',
            'flex-end': 'end',
            'flex-start': 'start',
            inherit: 'inherit',
            initial: 'initial',
            left: 'left',
            normal: 'normal',
            right: 'right',
            safe: 'safe',
            'self-end': 'self-end',
            'self-start': 'self-start',
            start: 'start',
            stretch: 'stretch',
            unsafe: 'unsafe',
            unset: 'unset',
        },
    },
    {
        styleName: [ 'flexDirection','WebkitFlexDirection' ],
        ieAlias: '-ms-flex-direction',
        styleValues: {
            column: 'column',
            'column-reverse': 'column-reverse',
            row: 'row',
            'row-reverse': 'row-reverse',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
        },
    },
    {
        styleName: 'flexWrap',
        ieAlias: '-ms-flex-wrap',
        styleValues: {
            nowrap: 'nowrap',
            wrap: 'wrap',
            'wrap-reverse': 'wrap-reverse',
            inherit: 'inherit',
            initial: 'initial',
            unset: 'unset',
        },
    },
    {
        styleName: 'flexFlow',
        ieAlias: '-ms-flex-flow',
    },
    {
        styleName: 'order',
        ieAlias: '-ms-flex-order',
    },
    {
        styleName: 'flexBasis',
        ieAlias: '-ms-flex-preferred-size',
    },
    {
        styleName: 'flexGrow',
        ieAlias: '-ms-flex-positive',
    },
    {
        styleName: 'flex',
        ieAlias: '-ms-flex',
    },
    {
        styleName: 'flexShrink',
        ieAlias: '-ms-flex-negative',
    },
    {
        styleName: 'alignСontent',
        ieAlias: '-ms-flex-line-pack',
        styleValues: {
            baseline: 'baseline',
            center: 'center',
            end: 'end',
            'flex-end': 'end',
            'flex-start': 'start',
            inherit: 'inherit',
            initial: 'initial',
            left: 'left',
            normal: 'normal',
            right: 'right',
            safe: 'safe',
            'space-around': 'distribute',
            'space-between': 'justify',
            'space-evenly': 'space-evenly',
            start: 'start',
            stretch: 'stretch',
            unsafe: 'unsafe',
            unset: 'unset',
        },
    },
    {
        styleName: 'alignSelf',
        ieAlias: '-ms-flex-item-align',
        styleValues: {
            baseline: 'baseline',
            center: 'center',
            end: 'end',
            'flex-end': 'end',
            'flex-start': 'start',
            inherit: 'inherit',
            initial: 'initial',
            left: 'left',
            normal: 'normal',
            right: 'right',
            safe: 'safe',
            'self-end': 'self-end',
            'self-start': 'self-start',
            start: 'start',
            stretch: 'stretch',
            unsafe: 'unsafe',
            unset: 'unset',
        },
    },
];
/**
 * @desc Фенкция для проверки наличия метода в объекте
 * */
const has = Object.prototype.hasOwnProperty;


/**
 * @param {object}  styleMap - карта стилей
 * @param {object}  felaStyle - стили класса фелы
 * @return {object} felaStyle - возвращает измененные стили
 * */
const addFlexMS = (styleMap, felaStyle) => {
    styleMap.map(item => {
        let styleName = '';

        if (Array.isArray(item.styleName)) {
            styleName = item.styleName.find(item => has.call(felaStyle,item))
        } else {
            styleName = item.styleName;
        }

        if (has.call(felaStyle,styleName)) {
            if (has.call(item,'styleValues')) {
                Object.entries(item.styleValues).map(([ key,value ]) => {
                    if (felaStyle[ styleName ].indexOf(key) !== -1) {
                        felaStyle[ styleName ] += `;${item.ieAlias}:${value}`;
                    }
                    return null;
                });
            } else {
                // console.info(`Для свойства ${styleName} нет альтернативных значений.`);
                felaStyle[ styleName ] += `;${item.ieAlias}:${felaStyle[ styleName ]}`;
            }
        }
        return null;
    });
    return felaStyle;
};


export default (style,type,renderer,props) => {
    const felaStyle = addFlexMS(propsMap, style);
    /**
     * Проверить есть ли вложенные объекты и если есть то проверить есть ли в них свойства flex box
     * */
    Object.entries(felaStyle).map(([ key, prop ]) => {
        if (typeof prop === 'object') {
            felaStyle[key] = addFlexMS(propsMap, prop);
        }
    });
    return felaStyle;
};
