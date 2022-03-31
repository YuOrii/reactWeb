export default function Tables() {
    return <div className="Table-header">
        {/*<style type="text/css">*/}
        {/*    .tftable {font - size:12px;color:#333333;width:100%;border-width: 1px;border-color: #729ea5;border-collapse: collapse;}*/}
        {/*    .tftable*/}
        {/*    th {font - size:12px;background-color:#acc8cc;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;text-align:left;}*/}
        {/*    .tftable tr {background - color:#d4e3e5;}*/}
        {/*    .tftable td {font - size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;}*/}
        {/*    .tftable tr:hover {background - color:#ffffff;}*/}
        {/*</style>*/}
        <div>
            <h3>Claim No. 346489</h3>
            <h5>Property: 2500 University Dr NW, Calgary, AB T2N 1N4<br/>
                Status: Estimated, Not Repairable</h5>

            <div className="btn-group">
                <button>Select</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>

            <p>Damage Report</p>

            <table className="tftable" border="1">
                <tr>
                    <th>No.</th>
                    <th>Zone</th>
                    <th>Area</th>
                    <th>Estimate Cost</th>
                    <th>Estimate Repair Time</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>Living Room</td>
                    <td>Wall</td>
                    <td>~$3500</td>
                    <td>3.5 weeks</td>
                    <td>Water pipe burst at night. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><i>same as above</i></td>
                    <td>Floor</td>
                    <td>~$6100</td>
                    <td>7.5 weeks</td>
                    <td><i>same as above</i>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><i>Basement</i></td>
                    <td>Ceiling</td>
                    <td>~$6500</td>
                    <td>4 weeks</td>
                    <td><i>same as above</i>
                    </td>
                </tr>
            </table>
        </div><div>
            <h3>Claim No. 346488</h3>
            <h5>Property: 2497 University Dr NW, Calgary, AB T2N 1N4<br/>
                Status: Repairing</h5>

            <div className="btn-group">
                <button>Select</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>

            <p>Damage Report</p>

            <table className="tftable" border="1">
                <tr>
                    <th>No.</th>
                    <th>Zone</th>
                    <th>Area</th>
                    <th>Estimate Cost</th>
                    <th>Estimate Repair Time</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>Living Room</td>
                    <td>Wall</td>
                    <td>~$3500</td>
                    <td>3.5 weeks</td>
                    <td>Water pipe burst at night. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><i>same as above</i></td>
                    <td>Floor</td>
                    <td>~$6100</td>
                    <td>7.5 weeks</td>
                    <td><i>same as above</i>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><i>Basement</i></td>
                    <td>Ceiling</td>
                    <td>~$6500</td>
                    <td>4 weeks</td>
                    <td><i>same as above</i>
                    </td>
                </tr>
            </table>
        </div><div>
            <h3>Claim No. 346487</h3>
            <h5>Property: 2300 University Dr NW, Calgary, AB T2N 1N4<br/>
                Status: Repairing</h5>

            <div className="btn-group">
                <button>Select</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>

            <p>Damage Report</p>

            <table className="tftable" border="1">
                <tr>
                    <th>No.</th>
                    <th>Zone</th>
                    <th>Area</th>
                    <th>Estimate Cost</th>
                    <th>Estimate Repair Time</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>Living Room</td>
                    <td>Wall</td>
                    <td>~$3500</td>
                    <td>3.5 weeks</td>
                    <td>Water pipe burst at night. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><i>same as above</i></td>
                    <td>Floor</td>
                    <td>~$6100</td>
                    <td>7.5 weeks</td>
                    <td><i>same as above</i>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><i>Basement</i></td>
                    <td>Ceiling</td>
                    <td>~$6500</td>
                    <td>4 weeks</td>
                    <td><i>same as above</i>
                    </td>
                </tr>
            </table>
        </div>
    </div>
}