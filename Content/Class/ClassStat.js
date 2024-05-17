var classes = [
    {
        name: '모험가',
        maxWork: 100,
        currentStats: { str: 1, dex: 1, int: 1 },
        masterStats: { str: 1, dex: 1, int: 1 }
    },
    {
        name: '전사',
        maxWork: 100,
        currentStats: { str: 3, dex: 1, int: 1 },
        masterStats: { str: 1, dex: 0, int: 0 }
    },
    {
        name: '궁수',
        maxWork: 100,
        currentStats: { str: 1, dex: 3, int: 1 },
        masterStats: { str: 0, dex: 1, int: 0 }
    },
    {
        name: '마법사',
        maxWork: 100,
        currentStats: { str: 1, dex: 1, int: 3 },
        masterStats: { str: 0, dex: 0, int: 1 }
    }
];

function setCurrentJob(jobName) {
    var job = classes.find(cls => cls.name === jobName);
    if (job) {
        document.getElementById('jobStr').textContent = job.currentStats.str;
        document.getElementById('jobDex').textContent = job.currentStats.dex;
        document.getElementById('jobInt').textContent = job.currentStats.int;

        document.getElementById('masterStr').textContent = job.masterStats.str;
        document.getElementById('masterDex').textContent = job.masterStats.dex;
        document.getElementById('masterInt').textContent = job.masterStats.int;

        document.getElementById('totalClassStr').textContent = job.currentStats.str + job.masterStats.str;
        document.getElementById('totalClassDex').textContent = job.currentStats.dex + job.masterStats.dex;
        document.getElementById('totalClassInt').textContent = job.currentStats.int + job.masterStats.int;

        document.querySelectorAll('.contentClass2 button').forEach(button => button.classList.remove('selected'));
        document.querySelector(`.contentClass2 button[onclick="setCurrentJob('${jobName}')"]`).classList.add('selected');
    } else {
        console.error('Job not found:', jobName);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setCurrentJob('모험가');

    function createClassButtons() {
        var classChangeDiv = document.querySelector('.classChange');
        classes.forEach(cls => {
            if (cls.name !== '모험가') {
                var button = document.createElement('button');
                button.textContent = cls.name;
                button.setAttribute('value', cls.name);
                button.addEventListener('click', function() {
                    setCurrentJob(this.value);
                });
                classChangeDiv.appendChild(button);

                button.addEventListener('click', function() {
                    document.querySelectorAll('.contentClass2 button').forEach(button => button.classList.remove('selected'));
                    this.classList.add('selected');
                });
            }
        });
    }

    createClassButtons();
});