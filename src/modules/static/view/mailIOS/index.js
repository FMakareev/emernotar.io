/** global ENDPOINT_CLIENT */
import React, { Component } from 'react';
import { Image } from "../../../../blocks/image";
import logoImage from '../../../../assets/email_logo..jpg';
import { getActiveLanguage, getTranslate } from "react-localize-redux/lib/index";
import { Store } from "../../../../store";
import { connect as ReduxConnect } from "react-redux";
import { changeTranslate } from "../../../../store/reducers/localization/actions";
import { connect as FelaConnect } from "react-fela";
import { Typography } from "../../../../blocks/typography";
import { TopLabel } from "../../../../components/topLabel";
import CALogo from '../mail/ca_logo';
import { Button } from "../../../../blocks/button";


export class MailIOS extends Component {
	render() {
		const {translate, styles, url, emerhash} = this.props;

		return (<table width="100%" border="0" cellPadding="0" cellSpacing="0" style={{
			borderSpacing: 0,
			borderCollapse: 'collapse',
		}}>

			<tbody>
			<tr style={{display: 'none'}}>
				<td>
					<mailsubject>
						{translate('static_dear_user')}
					</mailsubject>
				</td>
			</tr>
			<tr>
				<td align="center">
					<table width="100%" border="0" cellPadding="0" cellSpacing="0" style={{
						borderSpacing: 0,
						borderCollapse: 'collapse',
						width: '100%',
					}}>
						<thead className={styles.th}>
						<tr className={styles.top}>
							<td colSpan="2" width="100%">
                                <Image src={ENDPOINT_CLIENT + logoImage} alt={'emernotar.io'}/>
							</td>
						</tr>
						</thead>
					</table>

					<table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
						<tbody>
						<tr className={styles.topFooter}>
							<td>
								<TopLabel isActive styles={{
									transform: 'none',
									width: 'calc(100% - 48px)',
									marginTop: '24px'
								}}>
									<Typography as={'div'} fontWeight={'bold'} textAlign={'center'}>
										{
											translate('static_dear_user')
										}
									</Typography>
									<Typography as={'p'} fontWeight={'bold'}>
										{
											translate('static_template1_active_description')
										}
									</Typography>
								</TopLabel>
							</td>
						</tr>
						</tbody>
					</table>

					<table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
						<tbody>
						<tr className={styles.topFooter}>
							<td style={{padding: '24px 0 40px'}}>
								<Button as="a" href={url}
								        variant={"raised"}
								        color={'primary'}>
									<Typography as={'span'} size={'large'} textDecoration={'none'}>
										{
											translate('static_template1_active_button')
										}
									</Typography>
								</Button>
							</td>
						</tr>
						</tbody>
					</table>

					<table width="100%" border="0" cellPadding="0" cellSpacing="0" style={{
						borderSpacing: 0,
						borderCollapse: 'collapse',
						width: '100%',
					}}>
						<tfoot>
						<tr className={styles.footer}>
							<td colSpan="1" align="center">
								<table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
									<tfoot>
									<tr className={styles.footer}>
										<td colSpan="1">
											<Typography as={"p"} size={'small'} bright={'light'} fontWeight={'bold'}
											            textAlign={'center'}>
												EMERNOTAR.IO &copy; 2018-2021
											</Typography>
										</td>
										<td colSpan="1">
											<a target="_blank" style={{
												color: '#fff',
												textDecoration: 'none',
												display: 'block',
												padding: '10px 0'
											}} href="https://blog.emernotar.io/">
												<div style={{
													display: 'inline-block',
													verticalAlign: 'bottom',
													width: '40px',
													marginRight: '10px',
												}}>
													<CALogo/>
												</div>
												<Typography
													as={'span'}
													size={'medium'}
													color={'default'}
													bright={'contrastText'}
													styles={{
														display: 'inline-block',
														verticalAlign: 'middle',
													}}
												>
													News•Blog
												</Typography>
											</a>
										</td>
									</tr>
									</tfoot>
								</table>
							</td>
						</tr>
						</tfoot>
					</table>

				</td>
			</tr>
			</tbody>
		</table>)
	}
}

const style = ({theme}) => {
	return {
		top: {
			minHeight: '10rem',
			paddingTop: '1px',
			verticalAlign: 'middle',
			position: 'relative',
			borderBottom: '6px solid #FDF396',
			width: '100%',
			...theme.header,
		},
		topFooter: {
			minHeight: '43px',
			verticalAlign: 'middle',
			position: 'relative',
			textAlign: 'center',
			color: 'black',
			marginTop: '24px',
			width: '100%',
		},
		footer: {
			minHeight: '43px',
			verticalAlign: 'middle',
			position: 'relative',
			...theme.footer,
			borderTop: 'none',
			width: '100%',
		},

		table: {
			borderSpacing: 0,
			borderCollapse: 'collapse',
			width: '640px',
		},
		th: {},
		tr: {
			width: '100%',
		},

	}
};

const mapStateToProps = state => ({
	translate: getTranslate(state.locale),
	currentLanguage: getActiveLanguage(state.locale).code,
});

const mapDispatchToProps = dispatch => ({
	setActiveLanguage: (value) => {
		dispatch(changeTranslate(Store.getState(), value))
	}
});

MailIOS = FelaConnect(style)(MailIOS);

MailIOS = ReduxConnect(mapStateToProps, mapDispatchToProps)(MailIOS);

export default MailIOS;
