import React, { useMemo } from 'react';

import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { getProjectWithTotalTime } from './functions';
import { formatAsHmmExtended } from 'utils/helpers/timeHelper';

function Stats(props) {
    const { projects, timeEntries, projectIdsUnchecked, setProjectIdsUnchecked } = props;

    const projectWithTotalTime = useMemo(() => getProjectWithTotalTime(projects, timeEntries), [projects, timeEntries]);

    const handleCheck = (checked, projectId) => {
        if (checked) {
            setProjectIdsUnchecked(projectIdsUnchecked.concat(projectId));
        } else {
            setProjectIdsUnchecked(_.without(projectIdsUnchecked, projectId));
        }
    };

    return (
        <Grid container spacing={2}>
            {projectWithTotalTime.map(project => {
                const checked = !projectIdsUnchecked.includes(project.id);

                return (
                    <Grid key={project.id} item xs={12} sm={6} lg={4}>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        style={{ color: project.color }}
                                        onChange={() => handleCheck(checked, project.id)}
                                    />
                                }
                                label={
                                    <span>
                                        {project.name}:{' '}
                                        <span style={{ display: 'inline-block' }}>
                                            {formatAsHmmExtended(project.totalTime)}
                                        </span>
                                    </span>
                                }
                            />
                        </FormControl>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Stats;
