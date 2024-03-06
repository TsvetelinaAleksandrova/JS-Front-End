function solve(progress) {
    const renderProgress = (progress) => `${progress}% [${'%'.repeat(progress / 10)}${'.'.repeat(10 - progress / 10)}]`;
    const renderProgressBar = (progress) => `${progress}% ${renderProgressBar(progress)}`;
    const isCompleted = progress === 100;
    
    console.log(renderProgress(progress));
    console.log(isCompleted ? 'Complete!' : 'Still loading...');
}