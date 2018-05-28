import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};
  // var filesToBeSent=this.state.filesToBeSent;
  //   for(var i in filesToBeSent){
  //       filesToBeSent[i][0].name
  //   }






const tableData = [
    {
        // name: filesToBeSent[i][0].name,
        status: 'There is an elephant.',
    },

];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class ResultsTable extends Component {
    state = {
        fixedHeader: true,
        fixedFooter: false,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: true,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '300px',
    };

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    name={this.props.formData}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                                Results
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >
                        {/*<TableRow>*/}
                            {/*<TableRowColumn>ID</TableRowColumn>*/}
                            {/*<TableRowColumn>Name</TableRowColumn>*/}
                            {/*<TableRowColumn>Status</TableRowColumn>*/}
                        {/*</TableRow>*/}
                        {/*<TableRow>*/}
                            {/*<TableRowColumn colSpan="3" style={{textAlign: 'center'}}>*/}
                                {/*Super Footer*/}
                            {/*</TableRowColumn>*/}
                        {/*</TableRow>*/}
                    </TableFooter>
                </Table>

                <div style={styles.propContainer}>
                    {/*<h3>Table Properties</h3>*/}
                    {/*<TextField*/}
                        {/*floatingLabelText="Table Body Height"*/}
                        {/*defaultValue={this.state.height}*/}
                        {/*onChange={this.handleChange}*/}
                    {/*/>*/}
                    {/*<Toggle*/}
                        {/*name="fixedHeader"*/}
                        {/*label="Fixed Header"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.fixedHeader}*/}
                    {/*/>*/}
                    {/*<Toggle*/}
                        {/*name="fixedFooter"*/}
                        {/*label="Fixed Footer"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.fixedFooter}*/}
                    {/*/>*/}
                    {/*<Toggle*/}
                        {/*name="selectable"*/}
                        {/*label="Selectable"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.selectable}*/}
                    {/*/>*/}
                    {/*<Toggle*/}
                        {/*name="multiSelectable"*/}
                        {/*label="Multi-Selectable"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.multiSelectable}*/}
                    {/*/>*/}
                    {/*<Toggle*/}
                        {/*name="enableSelectAll"*/}
                        {/*label="Enable Select All"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.enableSelectAll}*/}
                    {/*/>*/}
                    {/*<h3 style={styles.propToggleHeader}>TableBody Properties</h3>*/}
                    {/*<Toggle*/}
                        {/*name="deselectOnClickaway"*/}
                        {/*label="Deselect On Clickaway"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.deselectOnClickaway}*/}
                    {/*/>*/}
                    {/*<Toggle*/}
                        {/*name="stripedRows"*/}
                        {/*label="Stripe Rows"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.stripedRows}*/}
                    {/*/>*/}
                    {/*<Toggle*/}
                        {/*name="showRowHover"*/}
                        {/*label="Show Row Hover"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.showRowHover}*/}
                    {/*/>*/}
                    {/*<h3 style={styles.propToggleHeader}>Multiple Properties</h3>*/}
                    {/*<Toggle*/}
                        {/*name="showCheckboxes"*/}
                        {/*label="Show Checkboxes"*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*defaultToggled={this.state.showCheckboxes}*/}
                    {/*/>*/}
                </div>
            </div>
        );
    }
}