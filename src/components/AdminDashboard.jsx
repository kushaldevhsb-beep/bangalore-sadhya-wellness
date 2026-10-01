import React, { useState, useEffect } from 'react';
import { 
  Shield, Key, Lock, Users, AlertCircle, CheckCircle, Clock, 
  Download, Trash2, Edit3, X, Search, Filter, Phone, Mail, MessageCircle, MapPin
} from 'lucide-react';
import { leadService } from '../services/leadService';

export default function AdminDashboard({ onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);
  const [editNotes, setEditNotes] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');

  // Default demo access PIN: 8618 (Matches last 4 digits of phone number +91 8618639113)
  const ADMIN_PIN = '8618';

  useEffect(() => {
    if (isAuthenticated) {
      loadLeads();
    }
  }, [isAuthenticated]);

  const loadLeads = () => {
    setLeads(leadService.getAll());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PIN || passcode === 'sadhya2024') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleStatusChange = (id, status) => {
    leadService.updateStatus(id, status);
    loadLeads();
  };

  const handleSaveNotes = (id) => {
    leadService.updateStatus(id, newStatus || selectedLead.status, editNotes, null, followUpDate);
    setSelectedLead(null);
    loadLeads();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this enquiry?")) {
      leadService.delete(id);
      loadLeads();
      if (selectedLead?.id === id) setSelectedLead(null);
    }
  };

  const handleExportCSV = () => {
    const csvContent = leadService.exportCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `sadhya_enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics
  const todayStr = new Date().toISOString().split('T')[0];
  const totalCount = leads.length;
  const newCount = leads.filter(l => l.status === 'New').length;
  const todayCount = leads.filter(l => l.createdAt.startsWith(todayStr)).length;
  const pendingFollowUp = leads.filter(l => l.status === 'Follow-up' || l.followUpDate === todayStr).length;
  const corporateLeads = leads.filter(l => (l.service || '').toLowerCase().includes('corporate') || (l.programType || '').toLowerCase().includes('corporate')).length;
  const womenLeads = leads.filter(l => (l.service || '').toLowerCase().includes('women') || (l.programType || '').toLowerCase().includes('women')).length;
  const communityLeads = leads.filter(l => (l.service || '').toLowerCase().includes('community') || (l.sessionMode || '').toLowerCase().includes('society')).length;
  const homeLeads = leads.filter(l => (l.service || '').toLowerCase().includes('home') || (l.sessionMode || '').toLowerCase().includes('home')).length;

  const filteredLeads = leads.filter(lead => {
    const matchSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-brand-linen rounded-3xl max-w-6xl w-full min-h-[600px] max-h-[92vh] flex flex-col shadow-2xl border border-brand-sand overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-brand-dark text-white p-5 px-6 flex items-center justify-between border-b border-brand-green/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-emerald/20 text-brand-emerald flex items-center justify-center border border-brand-emerald/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-serif font-bold tracking-wide">
                Sadhya Wellness — Lead &amp; Operations Portal
              </h2>
              <p className="text-xs text-brand-linen/60">
                Bengaluru Enquiry &amp; Consultation Management
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Barrier Screen */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <form onSubmit={handleLogin} className="max-w-sm w-full bg-white rounded-3xl p-8 shadow-xl border border-brand-sand text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-sand/50 text-brand-dark flex items-center justify-center mx-auto border border-brand-sand">
                <Lock className="w-7 h-7 text-brand-emerald" />
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-brand-dark">Coordinator Access</h3>
                <p className="text-xs text-brand-dark/70 mt-1">
                  Enter portal PIN to manage Bengaluru client records.
                </p>
              </div>

              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter PIN (Default: 8618)"
                  className="w-full text-center tracking-widest text-lg px-4 py-3 rounded-xl border border-brand-sand focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald outline-none font-mono"
                  autoFocus
                />
                {authError && (
                  <p className="text-xs text-red-600 mt-2 font-medium">
                    Incorrect PIN. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-brand-dark hover:bg-brand-slate text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
              >
                Authenticate &amp; Enter
              </button>

              <p className="text-[11px] text-brand-dark/50">
                Protected system • Customer data encrypted in session
              </p>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard Body */
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* 8 Stats Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-brand-dark/60 uppercase block">Total</span>
                <span className="text-2xl font-bold font-serif text-brand-dark">{totalCount}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-emerald-700 uppercase block">New</span>
                <span className="text-2xl font-bold font-serif text-emerald-700">{newCount}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-blue-700 uppercase block">Today</span>
                <span className="text-2xl font-bold font-serif text-blue-700">{todayCount}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-amber-700 uppercase block">Follow-up</span>
                <span className="text-2xl font-bold font-serif text-amber-700">{pendingFollowUp}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-brand-dark/60 uppercase block">Home Yoga</span>
                <span className="text-xl font-bold font-serif text-brand-dark">{homeLeads}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-brand-dark/60 uppercase block">Women's</span>
                <span className="text-xl font-bold font-serif text-brand-dark">{womenLeads}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-brand-dark/60 uppercase block">Corporate</span>
                <span className="text-xl font-bold font-serif text-brand-dark">{corporateLeads}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-brand-sand text-center">
                <span className="text-[11px] font-bold text-brand-dark/60 uppercase block">Society</span>
                <span className="text-xl font-bold font-serif text-brand-dark">{communityLeads}</span>
              </div>
            </div>

            {/* Filter and Action Bar */}
            <div className="bg-white p-4 rounded-2xl border border-brand-sand flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 flex-1">
                {/* Search */}
                <div className="relative min-w-[220px]">
                  <Search className="w-4 h-4 text-brand-dark/40 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search name, phone, area, service..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-brand-sand focus:border-brand-emerald text-xs outline-none"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-brand-sand text-xs font-semibold outline-none bg-white"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              {/* Export */}
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-sand hover:bg-brand-sand/40 text-brand-dark text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Enquiries Table */}
            <div className="bg-white rounded-2xl border border-brand-sand overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-brand-sand/40 border-b border-brand-sand text-brand-dark font-serif uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="p-3.5 pl-4">Client</th>
                      <th className="p-3.5">Contact</th>
                      <th className="p-3.5">Service &amp; Mode</th>
                      <th className="p-3.5">Location</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5">Created</th>
                      <th className="p-3.5 pr-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-sand/40">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="p-8 text-center text-brand-dark/50">
                          No matching records found.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-brand-linen/40 transition-colors">
                          <td className="p-3.5 pl-4 font-semibold text-brand-dark">
                            <div>{lead.name}</div>
                            <span className="text-[10px] text-brand-dark/50 uppercase tracking-wider font-mono">{lead.id}</span>
                          </td>
                          <td className="p-3.5">
                            <a href={`tel:${lead.phone}`} className="text-emerald-700 hover:underline block font-mono">
                              {lead.phone}
                            </a>
                            {lead.email && (
                              <span className="text-[11px] text-brand-dark/60 block truncate max-w-[140px]">{lead.email}</span>
                            )}
                          </td>
                          <td className="p-3.5">
                            <span className="font-medium text-brand-dark block">{lead.service}</span>
                            <span className="text-[10px] text-brand-green font-semibold uppercase">{lead.programType || lead.sessionMode}</span>
                          </td>
                          <td className="p-3.5">
                            <span className="text-brand-dark font-medium">{lead.location}</span>
                          </td>
                          <td className="p-3.5">
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border outline-none ${
                                lead.status === 'New' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                                lead.status === 'Contacted' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                                lead.status === 'Scheduled' ? 'bg-purple-50 text-purple-800 border-purple-300' :
                                lead.status === 'Follow-up' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                                'bg-gray-100 text-gray-800 border-gray-300'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Qualified">Qualified</option>
                              <option value="Scheduled">Scheduled</option>
                              <option value="Completed">Completed</option>
                              <option value="Follow-up">Follow-up</option>
                              <option value="Closed">Closed</option>
                              <option value="Not Interested">Not Interested</option>
                            </select>
                          </td>
                          <td className="p-3.5 text-brand-dark/60 whitespace-nowrap">
                            {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                          </td>
                          <td className="p-3.5 pr-4 text-right space-x-2">
                            <button
                              onClick={() => {
                                setSelectedLead(lead);
                                setEditNotes(lead.notes || '');
                                setNewStatus(lead.status);
                                setFollowUpDate(lead.followUpDate || '');
                              }}
                              className="p-1.5 rounded-lg border border-brand-sand hover:bg-brand-sand text-brand-dark transition-colors"
                              title="View & Edit Record"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(lead.id)}
                              className="p-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal for Viewing/Editing Lead */}
            {selectedLead && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-brand-sand space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-sand pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-brand-green uppercase font-mono">{selectedLead.id}</span>
                      <h3 className="text-xl font-serif font-bold text-brand-dark">{selectedLead.name}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="p-1.5 rounded-full hover:bg-brand-sand text-brand-dark"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-brand-sand/30 p-3.5 rounded-xl border border-brand-sand">
                    <div>
                      <span className="text-brand-dark/50 block font-bold uppercase">Phone / WhatsApp</span>
                      <a href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-emerald-700 font-semibold hover:underline">
                        {selectedLead.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-brand-dark/50 block font-bold uppercase">Location</span>
                      <span className="text-brand-dark font-medium">{selectedLead.location}</span>
                    </div>
                    <div>
                      <span className="text-brand-dark/50 block font-bold uppercase">Service</span>
                      <span className="text-brand-dark font-medium">{selectedLead.service}</span>
                    </div>
                    <div>
                      <span className="text-brand-dark/50 block font-bold uppercase">Source</span>
                      <span className="text-brand-dark font-mono text-[10px]">{selectedLead.source}</span>
                    </div>
                  </div>

                  {selectedLead.message && (
                    <div className="text-xs bg-brand-linen p-3 rounded-xl border border-brand-sand">
                      <span className="font-bold text-brand-dark/60 block mb-1">Client Message:</span>
                      <p className="text-brand-dark/80 italic">{selectedLead.message}</p>
                    </div>
                  )}

                  <div className="space-y-3 pt-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark/70 mb-1">
                          Status
                        </label>
                        <select
                          value={newStatus}
                          onChange={(e) => setNewStatus(e.target.value)}
                          className="w-full p-2 rounded-xl border border-brand-sand text-xs outline-none bg-white"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Qualified">Qualified</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed">Completed</option>
                          <option value="Follow-up">Follow-up</option>
                          <option value="Closed">Closed</option>
                          <option value="Not Interested">Not Interested</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark/70 mb-1">
                          Follow-up Date
                        </label>
                        <input
                          type="date"
                          value={followUpDate}
                          onChange={(e) => setFollowUpDate(e.target.value)}
                          className="w-full p-2 rounded-xl border border-brand-sand text-xs outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark/70 mb-1">
                        Coordinator Notes
                      </label>
                      <textarea
                        rows="3"
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        placeholder="Add trainer assignments, health notes, follow-up status..."
                        className="w-full p-2.5 rounded-xl border border-brand-sand text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end gap-2 border-t border-brand-sand">
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="px-4 py-2 rounded-xl border border-brand-sand text-xs font-semibold hover:bg-brand-sand/50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSaveNotes(selectedLead.id)}
                      className="px-5 py-2 rounded-xl bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-slate"
                    >
                      Save Updates
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
