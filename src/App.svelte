<script>
    import { BarChartComponent, ColumnChartComponent } from "@visuallyjs/browser-ui-svelte";
    import { charts } from "./examples";
</script>

<div class="vjs-bar-column-chart">
    {#each charts as chart}
        <div class="vjs-chart-example">
            <div class="vjs-chart-example-title">{chart.desc}</div>
            {#if chart.comments}
                <div class="vjs-chart-example-comments">{chart.comments}</div>
            {/if}
            {#if chart.type === 'bar'}
                <BarChartComponent className="vjs-chart-example-container" options={chart.options} />
            {:else if chart.type === 'column'}
                <ColumnChartComponent className="vjs-chart-example-container" options={chart.options} />
            {/if}
        </div>
    {/each}
</div>
