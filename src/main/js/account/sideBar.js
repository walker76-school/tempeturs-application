import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }
    
    render() {
        const classes = this.state.sidebarOpen ? 'toggled' : '';
        return (
            <div id='wrapper' className={classes}>

                <div id='sidebar-wrapper'>
                    <ul className='sidebar-nav'>
                        <li className='sidebar-brand'>
                            <a href='#'>
                                Start Bootstrap
                            </a>
                        </li>
                        <li>
                            <a href='#'>Dashboard</a>
                        </li>
                        <li>
                            <a href='#'>Shortcuts</a>
                        </li>
                        <li>
                            <a href='#'>Overview</a>
                        </li>
                        <li>
                            <a href='#'>Events</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>

                <div id='page-content-wrapper'>
                    <div className='container-fluid'>
                        <h1>Simple Sidebar</h1>
                        <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
                        <a onClick={this.onSetSidebarOpen} className='btn btn-secondary' id='menu-toggle'>Toggle Menu</a>
                    </div>
                </div>


            </div>
        );
    }
}

export default SideBar;