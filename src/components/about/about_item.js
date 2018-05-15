import React from 'react';
import {connect} from 'react-fela';
import {Image} from "../../blocks/image/index";
import {Typography} from "../../blocks/typography/index";

const AboutItem = ({styles, title, description, icon}) => {
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutIconWrapper}>
                <Image className={styles.aboutIconImage} src={icon}/>
            </div>
            <div className={styles.aboutContent}>
                <Typography
                    className={styles.aboutTitle}
                    as={'h3'}
                    size={'medium'}
                    fontWeight={'bold'}
                    textAlign={'inherit'}
                >
                    {title}
                </Typography>
                <Typography
                    className={styles.aboutDescription}
                    as={'p'}
                    size={'small'}
                    textAlign={'inherit'}
                >
                    {description}
                </Typography>
            </div>
        </div>);
}

const STYLE = ({theme,variant = 'vertical'}) => {
    return {
        aboutWrapper: {
            width: '100%',
            display: 'inline-flex !important',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            '-ms-flex-pack': 'start',
            verticalAlign: 'inherit',

            ...(variant === 'vertical' ? {
                '@media(min-width: 768px)':{
                    alignItems: 'center',
                    '-ms-flex-align': 'center',
                    '-ms-flex-pack': 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }
            }: null)


        },


        aboutIconWrapper: {
            position: 'relative',
            // border: '0.3rem solid #FDF396',
            backgroundColor: '#4F4F4F',
            borderRadius: '50%',
            overflow: 'hidden',
            width: '5rem',
            height: '5rem',
            minWidth: '5rem',
            marginRight: '2rem',

            ...(variant === 'vertical' ? {
                '@media(min-width: 768px)':{
                    margin: '0 auto',
                }
            }:null),

        },
        aboutIconImage: {
            position: 'absolute !important',
            width: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'

        },
        aboutContent:{
            textAlign: 'left',
            ...(variant === 'vertical' ? {
                '@media(min-width: 768px)':{
                    textAlign: 'center',
                }
            }:null),

        },
        aboutTitle: {
            marginBottom: '1rem',
            marginTop: 0,
            ...(variant === 'vertical' ? {
                '@media(min-width: 768px)':{
                    marginTop: '1.4rem'
                }
            }:null),

        },
        aboutDescription: {
            margin: '0',
        }
    }
}

export default connect(STYLE)(AboutItem)
