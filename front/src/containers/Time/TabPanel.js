import React from 'react';

import _ from 'lodash';

import List from '@material-ui/core/List';

import TimeEntry from './TimeEntry';
import TimeEntryEmptyState from './TimeEntryEmptyState';

function TabPanel(props) {
    const { timeEntries } = props;
    
    if (_.isEmpty(timeEntries)) {
        return <TimeEntryEmptyState />;
    }

    return (
        <List disablePadding>
            {timeEntries.map((timeEntry, index) => {
                return <TimeEntry key={timeEntry.id} divider={index < timeEntries.length - 1} {...timeEntry} />;
            })}
        </List>
    );
}

export default TabPanel;
