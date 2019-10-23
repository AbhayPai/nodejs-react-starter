import React from 'react';

import H1 from 'ViewsPath/jsx/databinding/H1';
import Input from 'ViewsPath/jsx/databinding/Input';

class IO extends React.Component {
    constructor(props) {
        super(props);
        this.updateTitle = this.updateTitle.bind(this);
        this.state = {
            title: 'Type in this textbox anything to reflect here'
        };
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
        this.defaultTitle = 'Type in this textbox anything to reflect here';
    }

    render() {
        return (
            <div className='container-fluid'>
                <H1 title={this.state.title} />
                <Input handleUpdateTitle={this.handleUpdateTitle} />
            </div>
        );
    }

    handleUpdateTitle(event) {
        event.target.value !== '' ?
            this.defaultTitle = event.target.value :
            this.defaultTitle = 'Type in this textbox anything to reflect here';

        this.updateTitle(this.defaultTitle);
    }

    updateTitle(title) {
        this.setState({title});
    }
}

export default IO;
