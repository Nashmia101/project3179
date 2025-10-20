
const bust = `?v=${Date.now()}`;

function embed(target, specPath) {
  fetch(specPath + bust, { cache: 'no-store' })
    .then(r => r.json())
    .then(spec => {
      
      spec.width = "container";
      spec.autosize = { type: "fit", contains: "padding" };
      vegaEmbed(target, spec, { actions: false, renderer: 'svg' });
    })
    .catch(err => {
      console.error(`Failed to load ${specPath}`, err);
      const el = document.querySelector(target);
      if (el) el.innerHTML = `<p class="muted">Failed to load ${specPath}. Check filename or JSON syntax.</p>`;
    });
}


embed('#mapVis', 'map.vl.json');
embed('#lineVis', 'line.vl.json');
embed('#heatmapVis', 'heatmap.vl.json');
embed('#lollipopVis', 'waffle.vl.json');  
embed('#donutVis', 'donut.vl.json');
embed('#barVis', 'barchart.vl.json');
embed('#scatterVis', 'scatter.vl.json');
embed('#bubbleVis', 'bubble.vl.json');
