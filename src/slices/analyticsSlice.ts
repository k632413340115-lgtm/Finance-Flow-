import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnalyticsData {
  timestamp: string;
  totalValue: number;
  dayChange: number;
  dayChangePercent: number;
}

interface AnalyticsState {
  history: AnalyticsData[];
  statistics: {
    bestPerformingStock: string;
    worstPerformingStock: string;
    portfolioReturn: number;
  };
}

const initialState: AnalyticsState = {
  history: [],
  statistics: {
    bestPerformingStock: '',
    worstPerformingStock: '',
    portfolioReturn: 0,
  },
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    addHistoryData: (state, action: PayloadAction<AnalyticsData>) => {
      state.history.push(action.payload);
    },
    updateStatistics: (state, action: PayloadAction<any>) => {
      state.statistics = action.payload;
    },
  },
});

export const { addHistoryData, updateStatistics } = analyticsSlice.actions;
export default analyticsSlice.reducer;
