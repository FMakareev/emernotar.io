import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import style from 'react-select/dist/react-select.css';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Select from 'react-select';

// @withStyles(style)
export class SelectAsyncMultiselect extends Component {
    static propTypes = {};

    static defaultProps = {};

    static MAX_CONTRIBUTORS = 6;
    static ASYNC_DELAY = 500;


    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.getDate = this.getDate.bind(this);
    }

    get initialState() {
        return {
            options: [
                {
                    "id": 1,
                    "name": "odoura"
                },
                {
                    "id": 2,
                    "name": "reportcamestrokes"
                },
                {
                    "id": 4,
                    "name": "caughtandbegan"
                },
                {
                    "id": 5,
                    "name": "insheof"
                },
                {
                    "id": 6,
                    "name": "heheardknow"
                },
                {
                    "id": 3,
                    "name": "dgdfgdfgdfgd"
                },
                {
                    "id": 7,
                    "name": "underhavingways"
                },
                {
                    "id": 8,
                    "name": "andfound.that"
                },
                {
                    "id": 9,
                    "name": "partyentire"
                },
                {
                    "id": 10,
                    "name": "moulding—thatoneto"
                },
                {
                    "id": 11,
                    "name": "fortunatelyinwoman"
                },
                {
                    "id": 12,
                    "name": "heofthe"
                },
                {
                    "id": 13,
                    "name": "mattersfromknew,"
                },
                {
                    "id": 14,
                    "name": "andcountryintelligence"
                },
                {
                    "id": 15,
                    "name": "nothingwakingI"
                },
                {
                    "id": 16,
                    "name": "matters”andhave"
                },
                {
                    "id": 17,
                    "name": "seen,whoarrested,"
                },
                {
                    "id": 18,
                    "name": "strangeidenticalpolice,"
                },
                {
                    "id": 19,
                    "name": "makesbenefitbut"
                },
                {
                    "id": 20,
                    "name": "thatcontrol,to"
                }
            ]
        }
    }

    async getDate(value) {
        const data = await fetch('https://ydtest.dev.compaero.ru/pygraphql', {
            method: 'POST',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
        query: ``,
                variables: value
            })
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response);
                }
                return Promise.reject(response.status);
            })
            .then(response => response.json())
            .then(response => response)
            .catch(error => {
                return error
            });

        console.log(data);
    }

    onChange() {

    }

    render() {
        const {value , options} = this.state;
        const {input, label, type, mods, meta, loading} = this.props;
        if(loading) {
            return (<div>'loading@'</div>)
        }
        console.log('options',this.props);
        return (
            <div className="section">

                <Select
                    multi={true}
                    value={input.value}
                    options={options}
                    onChange={(value)=>{
                        console.log(value);
                        input.onChange(value);
                    }}
                    valueKey="id"
                    labelKey="name"
                />

            </div>
        )
    }
}

