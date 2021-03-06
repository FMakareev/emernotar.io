import React, {Component, Fragment} from 'react';
import {Container} from "../../../../blocks/container/index";

import {getTranslate, getActiveLanguage} from 'react-localize-redux';

import ReactHtmlParser from 'react-html-parser';

import {Top} from "../../../../components/top/index";
import {Row} from "../../../../blocks/row/index";
import {Column} from "../../../../blocks/column/index";
import {TopLabel, TopLabelRow} from "../../../../components/topLabel/index";
import {connect} from "react-redux";
import {Typography} from "../../../../blocks/typography/index";
import {DecorateDots} from "../../../../components/decorate/index";

class AboutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {content: 'about_question_1_description'},
        {content: `about_question_2_description`},
        {content: `about_question_3_description`},
        {content: `about_question_4_description`},
        {content: `about_question_5_description`},
        {content: `about_question_6_description`},
        {content: `about_question_7_description`},
        {content: `about_question_8_description`},
        {content: `about_question_9_description`},
      ]
    };
  };

  static defaultProps = {};

  addLink(target) {
    if(typeof target === 'string'){
      try{
        if (target.substring('Алексей Конашевич')) {
          target = target.replace('Алексей Конашевич', '<a target="_blank" href="http://oleksii.konashevych.site/">Алексей Конашевич</a>')
        }
        if (target.substring('Oleksii Konashevych')) {
          target = target.replace('Oleksii Konashevych', '<a target="_blank" href="http://oleksii.konashevych.site/">Oleksii Konashevych</a>')
        }
        if (target.substring('Emercoin')) {
          target = target.replace('Emercoin', '<a target="_blank" href="https://emercoin.com/">Emercoin</a>')
        }
        if (target.substring('Emercoin Partnership')) {
          target = target.replace('Emercoin Partnership', '<a target="_blank" href="https://emercoin.com/">Emercoin Partnership</a>')
        }
        if (target.substring('видео об Эмеркойне')) {
          target = target.replace('видео об Эмеркойне', '<a target="_blank" href="https://www.youtube.com/watch?v=oIXNVc9en8c">видео об Эмеркойне</a>')
        }
        if (target.substring('video about Emercoin')) {
          target = target.replace('video about Emercoin', '<a target="_blank" href="https://www.youtube.com/watch?v=LIBakaR55ng">video about Emercoin</a>')
        }
        return ReactHtmlParser(target);
      } catch(e){
        console.error('addLink: ',e);
        return target
      }
    } else {
      return target;
    }
  }

  render() {
    const {translate} = this.props;
    const {data} = this.state;
    return (
      <Fragment>
        <Top>
          {translate('about_aboutus')}
        </Top>
        <Container>
          <Row>
            <Column>
              <TopLabelRow>
                <TopLabel isActive>
                  {translate('about_aboutus')}
                </TopLabel>
              </TopLabelRow>
            </Column>
          </Row>
        </Container>
        <Container styles={{marginBottom: '3rem', textAlign: 'center'}} maxWidth={'768px'}>
          {
            data && data.map((item, index) => {
              let element = this.addLink(translate(item.content));
              if (typeof element === 'string') {
                return (
                  <Row key={`AccordionWrapper-${index}`}>
                    <Column>
                      <Typography textAlign={'center'} as={'p'}>
                        {
                          element
                        }
                      </Typography>
                      <DecorateDots/>
                    </Column>
                  </Row>
                )
              } else {
                return (
                  <Row key={`AccordionWrapper-${index}`}>
                    <Column>
                      <Typography textAlign={'center'} as={'p'}>
                        {
                          element
                        }
                      </Typography>
                      <DecorateDots/>
                    </Column>
                  </Row>
                )
              }
            })
          }
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(AboutPage);
