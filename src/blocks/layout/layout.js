import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect as FelaConnect } from 'react-fela'
import { renderRoutes } from 'react-router-config'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import { Link } from 'react-router-dom'

import Header from '../../blocks/header/header'
import Footer from '../../blocks/footer/footer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from '../container/index'
import { Row } from '../row/index'
import { Column } from '../column/index'

import logoCA from '../../assets/icons/logo CArtel.svg'
import appleStore from '../../assets/icons/apple_store.svg'
import googlePlay from '../../assets/icons/google_play.svg'
import { Typography } from '../typography/index'

const LayoutStyle = ({ theme }) => {
  return {
    layout: {
      ...theme.layout
    },
    footer: {
      ...theme.footer
    }
  }
}

class Layout extends Component {
  static propTypes = {}

  render () {
    const { styles, translate } = this.props
    return (
      <React.Fragment>
        <div className={styles && styles.layout}>
          <Header />
          <main>
            {renderRoutes(this.props.route.routes)}
          </main>
        </div>

        <Footer className={styles && styles.footer}>
          <Container>
            <Row>
              <Column
                styles={{
                  marginBottom: '15px',
                  '@media(min-width: 768px)': {
                    display: 'inline-block',
                    width: '40%',
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    marginBottom: '0'
                  }
                }}
              >
                <Row>
                  <Typography
                    as={'span'}
                    size={'medium'}
                    color={'default'}
                    bright={'contrastText'}
                  >
                    {translate('home_copyright')}
                  </Typography>
                </Row>
                <Row>
                  <Column
                    styles={{
                      verticalAlign: 'middle',
                      display: 'inline-block',
                      width: '50%',
                      marginBottom: '15px',
                      '@media(min-width: 768px)': {
                        width: '30%',
                        marginBottom: '0'
                      }
                    }}
                  >
                    <img
                      style={{ width: '100%' }}
                      src={appleStore}
                      alt='download from app store'
                    />
                  </Column>
                  <Column
                    styles={{
                      verticalAlign: 'middle',
                      display: 'inline-block',
                      width: '50%',
                      marginBottom: '15px',
                      '@media(min-width: 768px)': {
                        width: '30%',
                        marginBottom: '0'
                      }
                    }}
                  >
                    <a
                      href='https://play.google.com/store/apps/details?id=com.emercoin.emernotar'
                      target='_blank'
                    >

                      <img
                        style={{ width: '100%' }}
                        src={googlePlay}
                        alt='download from google play'
                      />
                    </a>
                  </Column>
                </Row>
              </Column>

              <Column
                styles={{
                  '@media(min-width: 768px)': {
                    display: 'inline-block',
                    width: '30%',
                    verticalAlign: 'top',
                    textAlign: 'center'
                  }
                }}
              >
                <Link to='/policy' styles={{ verticalAlign: 'top' }}>
                  <Typography
                    as={'span'}
                    size={'medium'}
                    color={'default'}
                    bright={'contrastText'}
                  >
                    {translate('home_policy')}
                  </Typography>
                </Link>
              </Column>

              <Column
                styles={{
                  '@media(min-width: 768px)': {
                    display: 'inline-block',
                    width: '30%',
                    verticalAlign: 'top',
                    textAlign: 'center'
                  }
                }}
              >
                <a
                  target='_blank'
                  style={{
                    color: '#fff',
                    textDecoration: 'none'
                  }}
                  href='https://blog.emernotar.io/'
                >
                  <div
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'top',
                      width: '40px',
                      height: '40px',
                      marginRight: '10px'
                    }}
                  >
                    <img style={{ border: 'none',     width: '100%' }} src={logoCA} alt='' />
                  </div>
                  <Typography
                    as={'span'}
                    size={'medium'}
                    color={'default'}
                    bright={'contrastText'}
                    styles={{
                      display: 'inline-block',
                      verticalAlign: 'top'
                    }}
                  >
                    News•Blog
                  </Typography>
                </a>
              </Column>
            </Row>
          </Container>
        </Footer>

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
})
Layout = FelaConnect(LayoutStyle)(Layout)
Layout = connect(mapStateToProps)(Layout)

export default withRouter(Layout)
