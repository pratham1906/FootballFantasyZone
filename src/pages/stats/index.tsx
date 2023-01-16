import { useReducer } from 'react';
import { __prod__ } from '../../constants';
import { BrowserFilters } from '../../modules/stats/BrowserFilters';
import { MainLayout } from '../../common/layouts';

interface Action {
    filter: string;
    value: string | number | number[];
}

interface FilterState {
    search?: string;
    club?: string;
    position?: string;
    goals?: number[];
    assists?: number[];
}

function reducer(state: FilterState, action: Action) {
    switch (action.filter) {
        case 'search':
            return { ...state, search: action.value as string };
        case 'clubs':
            return { ...state, clubs: action.value as string };
        case 'positions':
            return { ...state, positions: action.value as string };
        case 'goals':
            return { ...state, goals: action.value as number[] };
        case 'assists':
            return { ...state, assists: action.value as number[] };
        default:
            return state;
    }
}

function Stats() {
    const [filters, dispatch] = useReducer(reducer, {});

    return (
        <MainLayout>
            <div>
                {__prod__ && (
                    <pre className='w-full text-center'>
                        {JSON.stringify(filters)}
                    </pre>
                )}
                <BrowserFilters dispatchFilters={dispatch} />
            </div>
        </MainLayout>
    );
}

export default Stats;
