const FormatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
       
    }).format(date);
}

export default FormatDate
