import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect as FelaConnect } from "react-fela";
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect as ReduxConnect } from "react-redux";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import questionIcon from '../../../../assets/icons/questionIcon.jpg';

import { Typography } from "../../../../blocks/typography/index";
import { TopLabel } from '../../../../components/topLabel/index';
import { Button } from '../../../../blocks/button/index';
import { changeTranslate } from "../../../../store/reducers/localization/actions";
import { Store } from '../../../../store';
import CALogo from './ca_logo';
import { Image } from "../../../../blocks/image/index";

import logoImage from '../../../../assets/email_logo..jpg';
import { isEmail } from "../../../../utils/validation/is_email";


const certificateItem = gql`
    query($emerhash: String) {
        certificateItem(emerhash:$emerhash){
            name
            fileName
            notarizationCreateTime
            submittingDate
            submittingExpiration
            ownerEmail
            emerhash
            idTransaction
            blockChainAddress
            serviceName
            paymentId
            PayerID
            language
            additionalinfo
        }
    }
`;

class Mail extends Component {

	static propTypes = {
		/**
		 * @desc Current language loaded in the redux store
		 * */
		currentLanguage: PropTypes.string,
		/**
		 * @desc Current language on the server
		 * */
		language: PropTypes.string,
		/**
		 * @desc Function of changing the language, the input receives a string
		 * */
		setActiveLanguage: PropTypes.func,
		/**
		 * @desc Function for receiving translation by key
		 * */
		translate: PropTypes.func,
		/**
		 * @desc Object with styles CSS-IN-JS
		 * */
		styles: PropTypes.object,
	};

	static defaultProps = {
		currentLanguage: 'EN',
		language: 'EN',
		data: {
			loading: false,
			certificateItem: {
				submittingDate: '{submittingDate}',
				submittingExpiration: '{submittingExpiration}',
				language: '{language}',
				idTransaction: '{idTransaction}',
				blockChainAddress: '{blockChainAddress}',
				ownerEmail: '{ownerEmail}',
				serviceName: '{serviceName}',
				emerhash: '{emerhash}',
				additionalInfo: '{additionalInfo}',
				fileName: '{fileName}',
				name: '{name}',
			}
		}
	};

	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	get initialState() {
		return {}
	}

	componentWillMount() {
		// const {setActiveLanguage,currentLanguage,language} = this.props;
		// if (currentLanguage !== language) {
		//     setActiveLanguage(language);
		// }
	}

	validityOwnerEmail(ownerEmail) {
		const {translate} = this.props;

		if (!isEmail(ownerEmail)) {
			return (<Fragment>
				{translate('static_owner')}: {ownerEmail} <br/>
			</Fragment>)
		} else {
			return (<Fragment>
				{translate('static_owner_hash')}: {ownerEmail} <br/>
			</Fragment>)
		}
	}

	render() {
		const {translate, styles, setActiveLanguage, emerhash, location, currentLanguage} = this.props;

		return <Query
			query={certificateItem}
			// skip={!url.emerhash}
			variables={{
				emerhash
			}}
		>
			{({loading, error, data}) => {
				console.log('certificateItem: ', loading, error, data);

				// if (loading) {
				// 	console.log('loading...', loading);
				// 	return null;
				// }
				if (error) {
					console.error('ERROR: ', error);
					return (<Typography
						as={'p'}
						size={'medium'}
						color={'error'}
						bright={'dark'}
						fontWeight={'bold'}
						textAlign={'center'}
					>
						{translate('home_network_error')}
					</Typography>)
				}
				if (data && data.certificateItem) {
					const {
						submittingDate,
						submittingExpiration,
						language,
						idTransaction,
						blockChainAddress,
						ownerEmail,
						serviceName,
						emerhash,
						additionalinfo,
						fileName,
						name,
					} = data.certificateItem;


					if (language.toUpperCase() !== currentLanguage) {
						setActiveLanguage(language.toUpperCase());
					}
					const submittingDateFormat = new Date(Number.parseInt(submittingDate) * 1000).toString();
					const submittingExpirationFormat = new Date(Number.parseInt(submittingExpiration) * 1000).toString();
					return (<table width="100%" border="0" cellPadding="0" cellSpacing="0" style={{
						borderSpacing: 0,
						borderCollapse: 'collapse',
					}}>

						<tbody>
						<tr style={{display: 'none'}}>
							<td>
								<mailsubject>
									{translate('static_mail_subject')}
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
													{translate('static_dear_user')}
												</Typography>
												<Typography as={'p'} fontWeight={'bold'}>

													{translate('static_description_row_1')} <br/>
													{translate('static_description_row_2')}
												</Typography>
											</TopLabel>
										</td>
									</tr>
									</tbody>
								</table>

								<table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
									<tbody>
									<tr className={styles.topFooter}>
										<td>
											<TopLabel isActive
											          styles={{transform: 'none', width: 'calc(100% - 48px)', margin: '0 24px 24px'}}>

												{translate('static_info_transactions')}
												<Typography as={'p'}>
													{translate('static_date_entry')}: {submittingDateFormat} <br/>
													{translate('static_transaction_id')}: {idTransaction} <br/>
													{translate('static_your_address')}: {blockChainAddress} <br/>

													{
														this.validityOwnerEmail(ownerEmail)
													}

													{translate('static_validity_period')}: {translate('static_to')} {submittingExpirationFormat} {' '}
													<a target="_blank"
													   href={`${ENDPOINT_CLIENT}/help#5`}
													   style={{textDecoration: 'none'}}>
                                        <span
	                                        style={{
		                                        display: 'inline-block',
	                                        }}
                                        >
                                            <Image
	                                            styles={{
		                                            display: 'block',
		                                            width: '18px',
		                                            height: '18px',
	                                            }}
	                                            src={ENDPOINT_CLIENT + questionIcon}
	                                            alt={"?"}
                                            />
                                        </span>
													</a>
													<br/>
													{translate('static_service')}: {serviceName} <br/>
													{translate('static_alternative_parsers')}: <a
													href={"https://explorer.emercoin.com/nvs//" + emerhash}
													target="_blank">https://explorer.emercoin.com</a>
													{/*<a href={"https://prohashing.com/explorer/Emercoin/"+ idTransaction}>https://prohashing.com/</a>*/}
												</Typography>
											</TopLabel>
										</td>
									</tr>
									</tbody>
								</table>

								{
									additionalinfo &&
									<table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
										<tbody>
										<tr>
											<td>
												<TopLabel isActive
												          styles={{transform: 'none', width: 'calc(100% - 48px)', margin: '0 24px 24px'}}>
													{translate('static_pagetitle_2')}
													<Typography as={'p'} lineHeight={'24px'}>
														{additionalinfo}
													</Typography>
												</TopLabel>
											</td>
										</tr>
										</tbody>
									</table>
								}


								<table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
									<tbody>
									<tr className={styles.topFooter}>
										<td>
											<Button as="a" href={`${ENDPOINT_CLIENT}/create_certificat/${emerhash}`}
											        variant={"raised"}
											        color={'primary'}>
												<Typography as={'span'} size={'large'} textDecoration={'none'}>
													{translate('static_print')}
												</Typography>
											</Button>
										</td>
									</tr>
									</tbody>
								</table>

								<table width="100%" border="0" cellPadding="0" cellSpacing="0" className={styles.table}>
									<tbody>
									<tr className={styles.topFooter}>
										<td colSpan="2">
											<Typography as={"div"} textAlign={'center'}>
												<table style={{
													width: '100%',
													textAlign: 'left'
												}}>
													<tbody>
													{
														name && <tr>
															<td style={{whiteSpace: 'nowrap'}}>
																{translate('static_hash_sum')}:
															</td>
															<td style={{
																wordWrap: 'break-word', width: '100%',
																maxWidth: 0,
															}}>
																{name}
															</td>
														</tr>
													}

													{
														fileName &&
														<tr>
															<td style={{whiteSpace: 'nowrap'}}>
																{translate('static_file_name')}:
															</td>
															<td style={{
																wordWrap: 'break-word', width: '100%',
																maxWidth: 0,
															}}>
																{fileName}
															</td>
														</tr>
													}
													</tbody>
												</table>
											</Typography>
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
																	lineHeight: '40px'
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
				} else {
					return (<Typography
						as={'p'}
						size={'medium'}
						color={'error'}
						bright={'dark'}
						fontWeight={'bold'}
						textAlign={'center'}
					>
						{translate('home_network_error')}
					</Typography>)
				}
			}}
		</Query>


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

Mail = FelaConnect(style)(Mail);

Mail = ReduxConnect(mapStateToProps, mapDispatchToProps)(Mail);

export default Mail;
